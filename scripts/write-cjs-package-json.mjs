import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distCjsDir = resolve("dist/cjs");
await mkdir(distCjsDir, { recursive: true });
await writeFile(
  resolve(distCjsDir, "package.json"),
  JSON.stringify({ type: "commonjs" }, null, 2) + "\n",
  "utf8",
);
