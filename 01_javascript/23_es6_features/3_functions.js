// Default Params
const displayUser = (name = "Guest") => {
    console.log(`Welcome Back! ${name}`);
};

displayUser();
displayUser("SRK");

// Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
