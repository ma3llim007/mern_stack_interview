class Person {
    #ssn;
    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }

    getSsn() {
        return this.#ssn;
    }
}

const obj = new Person("John", 45);
console.log(obj.getSsn());
