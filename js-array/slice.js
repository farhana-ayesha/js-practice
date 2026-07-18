const numbers = [1, 2, 3, 4, 5, 6];

const slice = numbers.slice(2, 5);
// console.log(slice);
// console.log(numbers);

const parts = numbers.splice(2, 2, 45, 47, 473, 35);
console.log(parts);
console.log(numbers);
