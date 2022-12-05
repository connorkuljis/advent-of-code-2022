import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf-8");
const commands = file.split("\n").splice(10);

// hardcode crates, abandoned creating a 2D jagged array
const input = [
  "VCDRZGBW",
  "GWFCBSTV",
  "CBSNW",
  "QGMNHJVCP",
  "TSLFDHB",
  "JVTWMN",
  "PFLCSTG",
  "BDZ",
  "MNZW",
];

function regexLine(command: string): number[] | undefined {
  // find all occurrences of a number in the string
  let matches = command.match(/\d+/g);
  if (matches) {
    // map each string an an integer
    return matches.map((x) => parseInt(x));
  }
  // we could not find any matches
  return undefined;
}

// part 1
function gold() {
  // create a copy of the input and split into a char (string) array
  let crates: string[][] = [...input].map((e) => e.split(""));

  // for each command
  for (let command of commands) {
    // regex the command and structure each value into variables
    let [q, from, to] = [...(regexLine(command) ?? [0, 0, 0])];

    // iterate of quantity of crates to move
    for (let i = 0; i < q; i++) {
      // perform the crane operation
      crates[to - 1].push(crates[from - 1].pop()!);
    }
  }

  // return the last element of each crate
  return crates.map((str) => str.slice(-1)[0]).join("");
}

// part 2
function silver() {
  let crates: string[][] = [...input].map((e) => e.split(""));

  for (let command of commands) {
    let [q, from, to] = [...(regexLine(command) ?? [0, 0, 0])];

    // if moving more than one box, create a stack
    if (q > 1) {
      let temp = [];
      for (let i = 0; i < q; i++) {
        // push on to the stack
        temp.push(crates[from - 1].pop()!);
      }
      // pop temp onto the target crate so the last element of temp will be placed first
      for (let i = 0; i < q; i++) {
        crates[to - 1].push(temp.pop()!);
      }
    } else {
      // perform the crane operation
      crates[to - 1].push(crates[from - 1].pop()!);
    }
  }
  // return the last element of each crate
  return crates.map((str) => str.slice(-1)[0]).join("");
}

console.log("part 1:" + gold());
console.log("part 2:" + silver());
