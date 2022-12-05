import { readFileSync } from "fs";
function stringPairToArray(s: string) {
  let split = s.split("-");
  return split.map((e) => parseInt(e));
}

function isPairHasCompleteOverlap(pair: number[][]) {
  let a = pair[0];
  let b = pair[1];

  return (a[0] <= b[0] && a[1] >= b[1]) || (b[0] <= a[0] && b[1] >= a[1]);
}

const file = readFileSync("input.txt", "utf-8");
const lines = file.split("\n");

const split: string[][] = lines.map((e) => e.split(",")); //
let pairs: number[][][] = split.map((nested) =>
  nested.map((e) => stringPairToArray(e))
);

let ans = 0;
for (let i = 0; i < pairs.length; i++) {
  if (isPairHasCompleteOverlap(pairs[i])) {
    ans = ans + 1;
  }
}
console.log(ans);
