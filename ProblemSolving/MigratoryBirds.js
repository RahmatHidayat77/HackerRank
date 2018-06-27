'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(ar) {
let hasil = 0,
highest = 0,
type1Sum = 0,
type2Sum = 0,
type3Sum = 0,
type4Sum = 0,
type5Sum = 0;
for(let i = 0; i < ar.length; i++) {
  if (1 === ar[i]) {
    type1Sum+=1;
  } else if (2 === ar[i]) {
    type2Sum+=1;
  } else if (3 === ar[i]) {
    type3Sum+=1; 
  } else if (4 === ar[i]) {
    type4Sum+=1;
  } else if (5 === ar[i]) {
    type5Sum+=1;
  }
}

let newAr = [type1Sum, type2Sum, type3Sum, type4Sum, type5Sum];

for(let j = 0; j < newAr.length; j++) {
  if (highest < newAr[j]) {
    highest = newAr[j];
}
}
for (let k = 0; k < newAr.length; k++) {
  if (highest === newAr[k]) {
    hasil = k+1;
    break;
  }
}
return hasil;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = migratoryBirds(ar);

    ws.write(result + "\n");

    ws.end();
}