let n = 6;
let k = 3;
let arr = [1, 3, 2, 6, 1, 2];
let result = 0;

for (let i = 0; i < arr.length-1; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j + 1 + i]);
    if ((arr[i] + arr[j + 1 + i]) % k === 0) {
      result += 1;
    }
    if (j + 1 + i >= 5) {
      break;
    }
  }
}
console.log(result);