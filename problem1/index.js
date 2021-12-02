import fs from "fs";
const text = fs.readFileSync("./input.txt").toString("utf-8");
const textByLine = text.split("\n");

let previousLine = 0;
let currentLine = 0;
let largerThanLast = 0;
let prev3 = 0;

for (const i in textByLine) {
  if (
    i >= 3 &&
    parseInt(textByLine[i]) +
      parseInt(textByLine[i - 1]) +
      parseInt(textByLine[i - 2]) >
      parseInt(textByLine[i - 1]) +
        parseInt(textByLine[i - 2]) +
        parseInt(textByLine[i - 3])
  )
    largerThanLast++;
}

console.log(largerThanLast);
