// The Dog Reviews the Mailman — a make.fun Mini entry.
//
// The brief asks for a review of the mailman, written by the dog. This
// program builds that review out of named parts — a star rating, what the
// mailman does right, the one unforgivable complaint, and the verdict —
// then checks it against the bounty's gate and writes it to entry.txt.
//
// Node 22, standard library only, no network, no dependencies.
import { closeSync, mkdirSync, openSync, writeSync } from "node:fs";
import { join } from "node:path";

// The review, in the dog's own voice. Each part is a separate constant
// so the review reads like a form the dog actually filled in: the rating
// up front, praise for the daily visit and the things to bark at, then
// the grudge — he has never once stayed for a belly rub — and a verdict
// that forgives him anyway, suspiciously.
const STARS = "Five stars for the mailman:";
const PRAISE =
  "he comes every day, brings me things to bark at, and has never once stayed for a belly rub.";
const VERDICT = "Suspicious, but reliable.";

const LINE = `${STARS} ${PRAISE} ${VERDICT}`;

// Sanity check on the parts before anything else: each part must be
// non-blank, and the assembled line must start with the rating and end
// with the verdict. If a part were ever emptied by mistake, this fails
// here instead of shipping a broken review.
function verifyParts(): void {
  for (const part of [STARS, PRAISE, VERDICT]) {
    if (part.trim() === "") {
      throw new Error("a review part must not be blank");
    }
  }
  if (!LINE.startsWith(STARS) || !LINE.endsWith(VERDICT)) {
    throw new Error("assembled review does not match its parts");
  }
}

// The bounty's gate: UTF-8 text, exactly one line, 1–200 characters.
// A single regular expression pins the shape (no newline characters,
// length in code points handled separately), and the length check counts
// Unicode code points, so multi-byte characters count as one each.
const SINGLE_LINE = /^[^\r\n]{1,200}$/u;

function measure(text: string): number {
  return [...text].length;
}

function assertGate(text: string): number {
  const n = measure(text);
  if (text.trim() === "") {
    throw new Error("review must not be blank");
  }
  if (!SINGLE_LINE.test(text)) {
    throw new Error(`review must be one line of 1-200 characters, got ${n}`);
  }
  return n;
}

// Where the sealed scorer looks: $MAKEFUN_OUTPUT_DIR when set, /output
// otherwise. The directory is created if it is missing.
function resolveEntryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  return join(dir, "entry.txt");
}

// Write through a file descriptor so the exact byte count written can be
// checked: the file must hold exactly the line, no trailing newline, so
// two runs always produce byte-identical files.
function emit(path: string, text: string): void {
  const bytes = Buffer.from(text, "utf8");
  const fd = openSync(path, "w");
  try {
    const written = writeSync(fd, bytes);
    if (written !== bytes.length) {
      throw new Error(`short write: ${written} of ${bytes.length} bytes`);
    }
  } finally {
    closeSync(fd);
  }
}

verifyParts();
const chars = assertGate(LINE);
const entryPath = resolveEntryPath();
emit(entryPath, LINE);
const bytes = Buffer.byteLength(LINE, "utf8");
console.log(
  `review written to entry.txt (${chars} chars, ${bytes} bytes) at ${entryPath}`,
);
