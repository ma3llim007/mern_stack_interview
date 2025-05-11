// Higher-order function: takes another function as an argument
function repeatOperation(func, times) {
    for (let i = 0; i < times; i++) {
        func(i);
    }
}

// Callback function to pass
function great(index) {
    console.log(`Hello, This is call #${index + 1}`);
}

repeatOperation(great,5)