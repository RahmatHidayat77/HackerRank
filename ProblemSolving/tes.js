let max = 0;
let value = 0;
let arr = [1, 2, 3, 4, 5];
let i, j;

for (i = 0; i < arr.length; i++) {
  // arr[j] = 0;
  for (j = 0; j < arr.length; j++) {
    value += arr[j];
    console.log(j);
  }
  if (value > max) {
    max = value;
  }
}
let min = max;
for (i = 0; i < arr.length; i++) {
  // arr[j] = 0;
  for (j = 0; j < arr.length; j++) {
    value += arr[j];
    console.log(j);
  }
  if (value < min) {
    min = value;
  }
}
console.log(max, min);
