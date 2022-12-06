import { readFileSync } from "fs";

function arrayToSet(buffer: string[]) {
  return new Set(Array.from(buffer));
}

//
function communicationSystem(signal: string[], markerSize: number) {
  let m = markerSize;
  let buffer = [];

  // read the first m 'characters into an array, to act as a temporary buffer
  let p = 0;
  for (p; p < m; p++) {
    buffer.push(signal[p]);
  }

  // convert the buffer to a set to remove duplicates
  // if the set size is equal to m, we have found a distinct set of 'characters'!
  if (arrayToSet(buffer).size == m) {
    return p;
  }

  // continue reading the rest of the signal.
  for (p; p < signal.length; p++) {
    // add it to the array, then remove the first element
    buffer.push(signal[p]);
    buffer.shift();

    // perform our check!
    if (arrayToSet(buffer).size == m) {
      return p;
    }
  }
}

// read the input into a string array
let signal = Array.from(readFileSync("input.txt", "utf-8"));
console.log(communicationSystem(signal, 4)! + 1);
console.log(communicationSystem(signal, 14)! + 1);
