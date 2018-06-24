'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
let i, j;
let leftDiagonal = 0;
let rightDiagonal = 0;

for ( i = 0, j = 0; i < arr.length, j < arr.length; i++, j++) {
            leftDiagonal += arr[i][j];
}


for ( i = arr.length-1, j = 0; i > j, j < arr.length; i--, j++) {
            rightDiagonal += arr[i][j];
}

return Math.abs(leftDiagonal-rightDiagonal);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
