// Map Function
const numbers = [1, 2, 3, 4];
const doubles = numbers.map((num) => num * 2);
console.log(doubles);

// filter example
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

// reduce example
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
