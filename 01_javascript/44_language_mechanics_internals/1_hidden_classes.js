function Person() {
    this.name = "Alice"; // HiddenClass1
    this.age = 30; // HiddenClass2 (update)
}

const p1 = new Person();
const p2 = new Person(); // Shares the same optimized hidden class as p1
