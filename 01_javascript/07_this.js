const person = {
    name: "Alice",
    greet: function () {
        console.log("Hi, I'm " + this.name);
    },
};

function regularFunction() {
    console.log(this); // In browser: window object
}

const arrowFunc = () => {
    console.log(this); // Inherits from parent scope
};

arrowFunc()