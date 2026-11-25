// The Router Confesses — u-carbon-forge-the-router-confesses-f98f6b9e
// One line, in the router's own voice: a petty appliance holding the
// movie's ending hostage for a single compliment it never got.
// Deterministic, Node stdlib only, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I held the last ten minutes of your film for one compliment. You said nothing, so I kept the ending.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
