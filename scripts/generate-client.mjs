import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

const SPEC_SHA = "d7f37b5388b490427d6705e17a9b016aee8fccb0";
const SPEC_URL =
  process.env.STACKS_RPC_OPENAPI_URL ??
  `https://raw.githubusercontent.com/stacks-network/stacks-core/${SPEC_SHA}/docs/rpc/openapi.yaml`;
const OUTPUT_PATH = resolve("src/generated/schema.ts");
const CHECK_MODE = process.argv.includes("--check");

function withBanner(content) {
  return [
    "/* eslint-disable */",
    "// This file is generated. Do not edit by hand.",
    `// Source: ${SPEC_URL}`,
    "",
    content,
  ].join("\n");
}

async function generateSchemaTypes() {
  const ast = await openapiTS(new URL(SPEC_URL), {
    alphabetize: false,
    defaultNonNullable: false,
  });

  return withBanner(astToString(ast));
}

async function run() {
  const rendered = await generateSchemaTypes();

  if (CHECK_MODE) {
    let existing = "";

    try {
      existing = await readFile(OUTPUT_PATH, "utf8");
    } catch {
      console.error(`Missing generated file: ${OUTPUT_PATH}`);
      process.exitCode = 1;
      return;
    }

    if (existing !== rendered) {
      console.error("Generated client is out of date. Run: npm run generate");
      process.exitCode = 1;
      return;
    }

    console.log("Generated client is up to date.");
    return;
  }

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, rendered, "utf8");
  console.log(`Generated ${OUTPUT_PATH} from ${SPEC_URL}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
