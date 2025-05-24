const p1 = {
    fname: "mohd",
    lname: "sameer",
    age: 20,
};

const p1Proxy = new Proxy(p1, {
    get(target, prop) {
        if (prop in target) return Reflect.get(target, prop);
        return false;
    },
    set(target, prop, value) {
        if (!(prop in target)) throw new Error(`${prop} does not exists`);
        switch (prop) {
            case "fname":
            case "lname":
                if (typeof value !== "string") throw new Error(`${prop} Must Be A String`);
                break;
            case "age":
                if (typeof value !== "number") throw new Error(`${prop} Must Be A Number`);
                if (value <= 0) throw new Error(`${prop} Must Be Greater Than Zero`);
                break;
        }
        // With default behavior this is bugging code
        // target[prop] = value;
        // using Reflect Method For Better code
        Reflect.set(target, prop, value);
    },
});

p1Proxy.fname = "Hero";
console.log(p1Proxy.fname);
console.log(p1Proxy.lname);
console.log(p1Proxy.age);
