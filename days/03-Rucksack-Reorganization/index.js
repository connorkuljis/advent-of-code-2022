"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs_1 = require("fs");
/**************************************
 char | ascii  | priority | diff  | val
 -----|--------|----------|-------|----
 a-z  | 97-122 | 1-26     | 97-1  | 96
 A-Z  | 65-90  | 27-52    | 65-27 | 38
 **************************************/
var LOWER_DIFF_VAL = 96;
var UPPER_DIFF_VAL = 38;
var file = (0, fs_1.readFileSync)("input.txt", "utf-8");
var lines = file.split("\n");
function convertAsciiToPriority(a) {
    var priority = 0;
    if (a >= 97 && a <= 122) {
        // lower case
        priority = a - LOWER_DIFF_VAL;
    }
    else if (a >= 65 && a <= 90) {
        // upper case
        priority = a - UPPER_DIFF_VAL;
    }
    return priority;
}
var sum = 0;
var _loop_1 = function (i) {
    var currentLine = lines[i];
    var splitIndex = currentLine.length / 2;
    // convert string to an array using spread operator
    var a = __spreadArray([], currentLine.slice(0, splitIndex), true);
    var b = __spreadArray([], currentLine.slice(splitIndex), true);
    // for each element in the array, get the ascii code and convert it to its priority
    var c1 = a.map(function (x) { return convertAsciiToPriority(x.charCodeAt(0)); });
    var c2 = b.map(function (x) { return convertAsciiToPriority(x.charCodeAt(0)); });
    // find the matches, use set to ignore duplicates
    var matches = __spreadArray([], new Set(c1.filter(function (e) { return c2.includes(e); })), true);
    matches.forEach(function (e) { return (sum += e); });
};
for (var i = 0; i < lines.length; i++) {
    _loop_1(i);
}
console.log("answer : " + sum);
// let str1 = "vJrwpWtwJgWrhcsFMMfFFhFp"
// console.log(str1.charCodeAt(0));
