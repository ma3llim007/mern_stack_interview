const canFly = {
    fly() {
        console.log("Flying");
    },
};

const canSwin = {
    swin() {
        console.log("Swimming");
    },
};

class Animals {
    constructor(name) {
        this.name = name;
    }
}

// Apply Mixins
Object.assign(Animals.prototype, canFly, canSwin);

const duck = new Animals("duck");
console.log(duck.name);
duck.fly();
duck.swin();