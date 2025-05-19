class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}

let a = new Animal();
let c = new Cat();

a.speak(); // Animal sound
c.speak(); // Meow (overridden)
