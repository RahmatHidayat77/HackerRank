"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    value = 0;
    let array = arr.map(x => x * 1);
    for (let j = 0; j < arr.length; j++) {
      array[i] = 0;
      value += array[j];
    }
    if (value > max) {
      max = value;
    }
  }
  min = max;
  for (let i = 0; i < arr.length; i++) {
    value = 0;
    let array = arr.map(x => x * 1);
    for (let j = 0; j < array.length; j++) {
      array[i] = 0;
      value += array[j];
    }
    if (value < min) {
      min = value;
    }
  }
  console.log(min, max);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
