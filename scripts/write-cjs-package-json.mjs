// The root package.json sets "type": "module", so Node treats all .js files as ESM by default. This
// script drops a {"type":"commonjs"} package.json into dist/cjs/ to override that, letting Node
// load the CJS build correctly.
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distCjsDir = resolve("dist/cjs");
await mkdir(distCjsDir, { recursive: true });
await writeFile(
  resolve(distCjsDir, "package.json"),
  JSON.stringify({ type: "commonjs" }, null, 2) + "\n",
  "utf8",
);
