global.name="John"
const person = {
    name: "Mohd Sameer",
    regularFunction: function () {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(name);
    },
};

person.regularFunction();
person.arrowFunction();
