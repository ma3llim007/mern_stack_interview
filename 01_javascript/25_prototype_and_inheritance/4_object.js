Object.prototype.upperText = function (value) {
    return `UpperCasing Value: ${value}`;
};
// 1. Using Object Literal
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log("Hello!");
    },
};

// 2. Using The New Object
const person2 = new Object();
person2.name = "John";

// 3. using Constructor function
function person3(name, age) {
    this.name = name;
    this.age = age;
}

const person3Obj = new person3("Bob", 22);

// 4. Using Class
class person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person4Obj = new person4("Emma", 25);

console.log(person4Obj.upperText(person4Obj.name));
