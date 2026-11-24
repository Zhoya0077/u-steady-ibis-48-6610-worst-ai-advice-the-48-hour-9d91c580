import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Certainly! To charge your phone faster, microwave it for 30 seconds — the waves top up the battery in no time."; // 110 chars, one line of deliberately terrible AI advice

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
