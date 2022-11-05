// single array
const arr = [1, 2, 3, 4];
const newArr = new Array(5, 6, 7, 8);
console.log(`arr ${arr} and newArr ${newArr}`);

console.log(`normal array loop ` );
for (const i of arr) {
  console.log(`${i}`);
}

//multidimentional array

const multiDimentionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];
console.log(`multi dimentional array `);
for (let i of multiDimentionalArr) {
  for (let j of i) {
    console.log(j);
  }
}
