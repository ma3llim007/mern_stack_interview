// Prototypal Inheritance
const parent = {
    greet() {
        console.log("Hello from parent");
    },
};

const child = {
    __proto__: parent,
};

// child.greet();

// Class Inheritance
class parent2 {
    greet() {
        console.log("Hello from parent");
    }
}

class child2 extends parent2 {}
const c = new child2();
c.greet();
