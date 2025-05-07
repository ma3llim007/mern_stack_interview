const personProtoType = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// Create a new object based on the prototype
const John = Object.create(personProtoType);
John.name = "John";
John.greet();

// Create a new object based on the prototype
const john = Object.create(personProtoType);
john.name = "John";
john.greet();

const jane = Object.create(personProtoType);
jane.name = "Jane";
jane.greet();
