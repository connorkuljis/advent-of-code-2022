import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf-8");

const lines = file.split("/\r?\n/");

console.log(lines);
