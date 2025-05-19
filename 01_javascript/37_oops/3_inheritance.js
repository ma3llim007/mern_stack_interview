class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

const animalObj = new Animal();
// animalObj.speak();

const dogObj = new Dog();
dogObj.speak()
dogObj.bark()
