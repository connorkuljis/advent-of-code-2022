"use strict";
// TypeScript:
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./items.txt", "utf-8");
var lines = file.split("\n");
var idx = 0;
var sum = 0;
var elves = [];
for (var i = 0; i < lines.length; i++) {
    if (lines[i].length == 0) {
        elves.push({ id: idx, sum: sum });
        sum = 0;
        idx++;
    }
    else {
        sum += parseInt(lines[i]);
    }
}
var sortedArray = elves.sort(function (a, b) { return a.sum - b.sum; });
var kcal_total = 0;
kcal_total += sortedArray.pop().sum;
kcal_total += sortedArray.pop().sum;
kcal_total += sortedArray.pop().sum;
console.log(kcal_total);
