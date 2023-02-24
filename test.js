const arraysLib = require('./arraysLib');

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 6, 5];

const x = arraysLib.arrayEquality(arr1, arr2);

console.log(x);