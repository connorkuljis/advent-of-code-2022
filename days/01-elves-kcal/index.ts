// TypeScript:

import { readFileSync } from "fs";

const file = readFileSync("./items.txt", "utf-8");
const lines = file.split("\n");

let idx = 0;
let sum = 0;

let elves: Array<{ id: number; sum: number }> = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].length == 0) {
    elves.push({ id: idx, sum: sum });
    sum = 0;
    idx++;
  } else {
    sum += parseInt(lines[i]);
  }
}

const sortedArray: { id: number; sum: number }[] = elves.sort(
  (a, b) => a.sum - b.sum
);

let kcal_total = 0;

kcal_total += sortedArray.pop()!.sum;
kcal_total += sortedArray.pop()!.sum;
kcal_total += sortedArray.pop()!.sum;

console.log(kcal_total);
