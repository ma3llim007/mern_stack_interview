function carFactory(type) {
    if (type === "sedan") {
        return { type: "sedan", doors: 4, fuel: "petrol" };
    } else if (type === "suv") {
        return { type: "suv", doors: 5, fuel: "diesel" };
    } else {
        return { type: "unknown", doors: 5, fuel: "none" };
    }
}

const myCar = carFactory("suv");
console.log(myCar);
