import {readFileSync} from "fs";

const file = readFileSync("input.txt", "utf-8");
const lines = file.split("\n");

function stringPairToArray(s: string) {
    let split = s.split('-')
    return split.map(e => parseInt(e));
}

function isPairHasCompleteOverlap(pair: number[][]) {
    let a = pair[0];
    let b = pair[1];

    let overlap = false;
    if (a[0] <= b[0] && a[1] >= b[1])
    {
        overlap = true;
    }
    else if (b[0] <= a[0] && b[1] >= a[1])
    {
        overlap = true;
        console.log(pair)
    }
    return overlap
}

const pairs = lines.map(e => e.split(','));
let res = pairs.map(nested => nested.map(e => stringPairToArray(e)));

let ans = 0;
for (let i = 0; i < res.length; i++) {
    if (isPairHasCompleteOverlap(res[i]))
    {
        ans = ans + 1;
    }
}
console.log(ans);




