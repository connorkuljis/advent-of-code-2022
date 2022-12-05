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
  let matches = command.match(/\d+/g);
  if (matches) {
    return matches.map((x) => parseInt(x));
  }
  return undefined;
}

// part 1
function gold() {
  let crates: string[][] = [...input].map((e) => e.split(""));
  for (let command of commands) {
    let [q, from, to] = [...(regexLine(command) ?? [0, 0, 0])];

    for (let i = 0; i < q; i++) {
      crates[to - 1].push(crates[from - 1].pop()!);
    }
  }

  // return the last element of each crate
  return crates.map((str) => str.slice(-1)[0]).join("");
}

// part 2
function silver() {
  let crates = [...input].map((e) => e.split(""));

  for (let command of commands) {
    let [q, from, to] = [...(regexLine(command) ?? [0, 0, 0])];

    if (q > 1) {
      let temp = [];
      // stack on to temp
      for (let i = 0; i < q; i++) {
        temp.push(crates[from - 1].pop()!);
      }
      // pop temp onto the target crate
      for (let i = 0; i < q; i++) {
        crates[to - 1].push(temp.pop()!);
      }
    } else {
      crates[to - 1].push(crates[from - 1].pop()!);
    }
  }
  // return the last element of each crate
  return crates.map((str) => str.slice(-1)[0]).join("");
}

console.log("part 1:" + gold());
console.log("part 2:" + silver());
