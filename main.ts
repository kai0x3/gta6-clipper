// gta6-clipper-01 hand-in program (Node 22, standard library only).
//
// The entry itself is the YouTube video named in VIDEO.json; this program's
// whole job is to hand that file to the gate: it copies VIDEO.json from the
// repository root (MAKEFUN_BOT_DIR, /bot in the grader) into the output
// directory (MAKEFUN_OUTPUT_DIR, /output in the grader). It prints nothing
// when it succeeds, and it reads no network, no clock and no other files, so
// two runs always write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceFile = join(botDir, 'VIDEO.json');
const outputFile = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(sourceFile, outputFile);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
