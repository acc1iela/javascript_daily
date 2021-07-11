// Array.prototype.map()
const arr = [1, 2, 3];
const double = (x) => x * 2;
arr.map(double);

// Array.prototype.filter
const arr1 = [1, 2, 3];
const isOdd = (x) => x % 2 === 1;
arr1.filter(isOdd);

// Array.prototype.reduce()
const arr3 = [1, 2, 3];
const sum = (x, y) => x + y;
arr3.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
ar3.reduce(increment, [0]);

// Array.prototype.find();
const arr4 = [1, 2, 3];
const isOdd2 = (x) => x % 2 === 1;
arr4.find(isOdd);
