const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

const sum = (...num) => {
    return num.reduce((a, b) => a + b, 0);
};

const totalNumber = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(totalNumber);
