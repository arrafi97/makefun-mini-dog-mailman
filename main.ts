// make.fun Mini entry: "The Dog Reviews the Mailman"
// A tiny Node 22 program (standard library only, no network). It writes a
// single funny line of at most 200 characters to <output>/entry.txt and
// reports its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a five-star review written in the dog's voice. The mailman
// is praised for the daily visit and the things to bark at, then docked
// for the one unforgivable sin — never staying for a belly rub. The
// "suspicious, but reliable" verdict is the dog holding a grudge politely,
// which keeps the review in character to the last word.
const LINE =
  "Five stars for the mailman: he comes every day, brings me things to bark at, and has never once stayed for a belly rub. Suspicious, but reliable.";

// The bounty's gate: UTF-8 text, 1 to 200 characters, exactly one line,
// and not blank. Count code points, not UTF-16 units, so the em dash
// counts as one character.
function checkLine(text: string): number {
  const n = [...text].length;
  if (text.trim() === "" || n < 1 || n > 200 || text.includes("\n")) {
    throw new Error(`line must be one line of 1-200 characters, got ${n}`);
  }
  return n;
}

const chars = checkLine(LINE);

// Write the line. The output directory comes from $MAKEFUN_OUTPUT_DIR
// when set, otherwise /output. The file holds exactly the line — no
// trailing newline — so two runs always produce byte-identical files.
// A trailing newline would change the byte count, so there is none.
// The sealed scorer reads this file directly, so nothing else may be
// written into the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
