import { readFileSync } from "fs";

function arrayToSet(buffer: string[]) {
  return new Set(Array.from(buffer));
}

let signal = Array.from(readFileSync("input.txt", "utf-8"));

function gold(signal: string[]) {
  let controlCodeSize = 4;
  let buffer = [];

  // check the first 4 characters
  let pointer = 0;
  for (pointer; pointer < controlCodeSize; pointer++) {
    buffer.push(signal[pointer]);
  }

  // convert the buffer to a set to remove duplicates
  // if the size is equal to the control code size, return the position current position
  if (arrayToSet(buffer).size == controlCodeSize) {
    return pointer;
  }

  // read the rest of the signal start for the
  for (pointer; pointer < signal.length; pointer++) {
    // add it to the array, then remove the first element
    buffer.push(signal[pointer]);
    buffer.shift();

    // perform our check!
    if (arrayToSet(buffer).size == controlCodeSize) {
      return pointer;
    }
  }
}

console.log(gold(signal)! + 1);
