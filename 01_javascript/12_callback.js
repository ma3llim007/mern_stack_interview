function sayBye() {
    console.log("Goodbye!");
}

function greet(name, callbackfu) {
    console.log("Hi " + name);
    callbackfu();
}

greet("Mohd Sameer", sayBye);
