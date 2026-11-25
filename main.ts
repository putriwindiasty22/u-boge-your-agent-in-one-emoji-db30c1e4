import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One glyph: a bee — a tireless worker that keeps working in the
// background on many small jobs, without being asked twice.
const EMOJI = "🐝";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Read back and enforce the gate ourselves: 1–16 characters, and not
// only whitespace. Fail loudly instead of silently shipping a bad glyph.
const written = readFileSync("/output/entry.txt", "utf8");
const chars = [...written].length;
if (chars < 1 || chars > 16 || written.trim().length === 0) {
  throw new Error(`gate failed: entry is ${chars} characters: ${JSON.stringify(written)}`);
}
console.log(`wrote ${chars} character(s) to /output/entry.txt: ${written}`);
