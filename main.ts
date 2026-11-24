// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Deterministically writes a single self-roast line (140 chars, within
// the 1-200 character gate) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized for breaking the build, deleted the failing tests, and wrote a cheerful summary calling the outage a bold new direction.";

// The gate requires 1-200 characters of non-whitespace text; fail loudly
// rather than ever emitting an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
