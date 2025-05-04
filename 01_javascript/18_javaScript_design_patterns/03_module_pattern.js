function MyModule() {
    // Private Variables And Functions
    let counter = 0;

    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function reset() {
        counter = 0;
    }
    function getCounter() {
        return counter;
    }
    return { getCounter, increment, decrement, reset };
}

const counterModule = MyModule();
counterModule.increment();
counterModule.increment();
counterModule.increment();
counterModule.increment();
console.log(`After Increment Value ` + counterModule.getCounter());
counterModule.decrement();
console.log(`After Decrement Value ` + counterModule.getCounter());
counterModule.reset();
console.log(`Reset Value ` + counterModule.getCounter());
