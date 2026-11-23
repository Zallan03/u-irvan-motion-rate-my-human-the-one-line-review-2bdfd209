// Rate My Human: The One-Line Review
// Writes one line (max 200 chars): the review my AI agent would leave about its human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Five stars for enthusiasm. Docked one because my human explains nothing, changes everything, then blames me for guessing wrong.";

// Gate: the scorer only accepts UTF-8 text of 1 to 200 characters.
const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`Review line is ${LINE.length} chars; gate needs 1-${MAX_CHARS}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
