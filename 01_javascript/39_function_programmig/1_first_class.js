// Assign them to variables
const sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20));

const display = (num) => {
    console.log(num);
};

// Pass them as arguments
function sum2(a, b, callBackFn) {
    callBackFn(a + b);
}
sum2(12, 12, display);

// Return them from other functions
function greet(name) {
    return `Hello, ${name}`;
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Alice", greet)); // Hello, Alice
