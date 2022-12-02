// 🪨    | 1  -> A | Y
// 📃    | 2  -> B | X
// ✂️    | 3  -> C | Z


import * as fs from "fs";

const LOSE = 0;
const DRAW = 3;
const WIN = 6;

const file = fs.readFileSync("input.txt", "utf-8");
const lines = file.split("\n")

const map1 = new Map();

map1.set('A', 1); // 🪨 rock
map1.set('B', 2); // 📃 paper
map1.set('C', 3); // ✂️ scissors

map1.set('X', 1); // 🪨 rock
map1.set('Y', 2); // 📃 paper
map1.set('Z', 3); // ✂️ scissors

let totalScore = 0;
for (let i = 0; i < lines.length; i++)
{
    let tokens = lines[i].split(' ');
    let computer_move = map1.get(tokens[0]);
    let player_move = map1.get(tokens[1]);

    let res = paperScissorsRock(computer_move, player_move);
    totalScore += res;
}

console.log("total score: " + totalScore);

function paperScissorsRock(computer_move: number, player_move: number)
{
    if (player_move == computer_move)
    {
        return DRAW + player_move;
    }
    else if (player_move == 1 && computer_move == 3)
    {
        return WIN + player_move;
    }
    else if (player_move == 2 && computer_move == 1)
    {
        return WIN + player_move;
    }
    else if (player_move == 3 && computer_move == 2)
    {
        return WIN + player_move;
    }
    else
    {
        return LOSE + player_move;
    }
}



