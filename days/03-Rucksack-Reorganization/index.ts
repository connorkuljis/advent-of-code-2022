import { readFileSync } from "fs";

/**************************************
 char | ascii  | priority | diff  | val
 -----|--------|----------|-------|----
 a-z  | 97-122 | 1-26     | 97-1  | 96
 A-Z  | 65-90  | 27-52    | 65-27 | 38
 **************************************/

const LOWER_DIFF_VAL = 96;
const UPPER_DIFF_VAL = 38;

const file = readFileSync("input.txt", "utf-8");
const lines = file.split("\n");

function convertAsciiToPriority(a: number) {
  let priority = 0;
  if (a >= 97 && a <= 122) {
    // lower case
    priority = a - LOWER_DIFF_VAL;
  } else if (a >= 65 && a <= 90) {
    // upper case
    priority = a - UPPER_DIFF_VAL;
  }
  return priority;
}

let sum = 0;
for (let i = 0; i < lines.length; i++) {
  let currentLine = lines[i];
  let splitIndex = currentLine.length / 2;

  // convert string to an array using spread operator
  let a = [...currentLine.slice(0, splitIndex)];
  let b = [...currentLine.slice(splitIndex)];

  // for each element in the array, get the ascii code and convert it to its priority
  let c1 = a.map((x) => convertAsciiToPriority(x.charCodeAt(0)));
  let c2 = b.map((x) => convertAsciiToPriority(x.charCodeAt(0)));

  // find the matches, use set to ignore duplicates
  let matches = [...new Set(c1.filter((e) => c2.includes(e)))];

  matches.forEach((e) => (sum += e));
}

console.log("answer : " + sum);

// let str1 = "vJrwpWtwJgWrhcsFMMfFFhFp"
// console.log(str1.charCodeAt(0));
