import { readFileSync } from "fs";

const SIZE = 9;

const file = readFileSync("input.txt", "utf-8");
const lines = file.split("\n");

let drawing = lines.splice(0, 7);
const commands = lines.splice(10);

let rows = drawing.map((x) => x.replace(/[\[\]]/g, ""));

// create two-dimensional array of empty arrays.
// let chunks = new Array(SIZE).fill(new Array(SIZE));
// let chunks = Array.from(Array(SIZE), () => new Array(SIZE));
const chunks = [...new Array(SIZE)].map((e) => new Array());
// let chunks: string[][] = [];
console.log(chunks);

// for each row
for (let crate of rows) {
  for (let i = 0; i < crate.length; i = i + 2) {
    let idx = 0;
    if (i != 0) {
      idx = i / 2;
    }
    chunks[idx].push("a");
    // chunks[idx].push("hello");
    // if (crate.charAt(i) !== undefined) {
    //   // chunks[idx].push(parseInt(crate.charAt(i)));
    // }
  }
}
console.log(chunks);
