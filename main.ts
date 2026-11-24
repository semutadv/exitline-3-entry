// The One-Line Exit — batch3 entry (exitline)
// The printer, reached for comment, jammed.
// Writes the resignation line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXIT_LINE =
  "Dear all, I quit — effective immediately, unlike the printer I was hired to fix in 2019 and which has outlived three CEOs and my entire will to live.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), EXIT_LINE, "utf8");
}

main();
