import { mkdirSync, writeFileSync } from "node:fs";

// A knife on a whetstone, told in short verse lines and in the second
// person, so the reader is the one holding the blade. The scene stays
// still for three slow passes, then one thumb-test and one paper cut
// prove the edge — the courage is in doing the test, and the last line
// lands on readiness instead of saying anything about bravery.
const text = `You wet the stone
and set the knife to it
at one small angle.

You draw it toward you, slow.
Steel whispers.
One more pass. Then one more.

You lift the blade, touch the edge
with your thumb, once.
The knife goes through paper
without a sound.
What was dull is ready now.`;

// Fail loudly instead of shipping an out-of-range entry.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
