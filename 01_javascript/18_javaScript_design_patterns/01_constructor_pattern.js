function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}

const john = new Person("john", 25);
john.greet();
