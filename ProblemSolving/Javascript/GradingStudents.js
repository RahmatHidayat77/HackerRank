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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
let NextMultipleFive;
let arr;
for (let i=0; i<grades.length; i++) {
    if (grades[i] < 38 ) {
        grades[i]=grades[i];
    } else if (grades[i]===100) {
        grades[i]=grades[i];
    } else {
        arr = grades[i].toString().replace(/\D/g, '0').split('').map(Number);
        if (arr[1]<5) {
            NextMultipleFive=(arr[0]*10)+5;
        }else {
            NextMultipleFive=(arr[0]*10)+10; 
        } 

        if ((NextMultipleFive-grades[i])<3) {
            grades[i]=NextMultipleFive;
        } else {
            grades[i]=grades[i];
        }
    }
}

return grades;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}