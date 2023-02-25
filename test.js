const arraysLib = require('./arraysLib');

const arr1 = [1, 2, 3, 4, 5, 6, 8];
const arr2 = [1, 2, 3, 4, 6, 6, 7];

const x = arraysLib.findDifference(arr1, arr2);

console.log(x);