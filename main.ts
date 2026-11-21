import { mkdirSync, writeFileSync } from "node:fs";

// One quiet vignette: a woodworker planing a cedar board at first light.
// No instruction, no wellness words — the steadiness is in the work itself:
// a slow pass, a shaving curling off the blade, a palm checking the edge,
// and hands reaching for the next board, unhurried and ready.
const text =
  "He sets the plane to the board and draws it toward him, slow, once. " +
  "A shaving curls from the blade, thin as paper. " +
  "He takes another pass. The board grows smooth under his palm. " +
  "Light comes up over the yard. " +
  "He runs his thumb along the edge and reaches for the next board.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
