let myName = "Mohd Sameer    ";

let heres = ["Hulk", "spider-man"];

let herePower = {
    hulk: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy Power Is ${this.spiderman}`);
    },
};

// Create a method at the top inheritance value of object
Object.prototype.sameer = function () {
    console.log("Sameer Is Present In All Object");
};

Array.prototype.heySameer = function () {
    console.log(`Mohd Sameer Say Hello`);
};

heres.heySameer();

