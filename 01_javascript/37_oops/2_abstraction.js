class Car {
    startCar() {
        this.#checkFuel();
        console.log("Car Is Start");
    }

    #checkFuel() {
        console.log("Fuel Is Full");
    }
}

const obj = new Car();
obj.startCar();
