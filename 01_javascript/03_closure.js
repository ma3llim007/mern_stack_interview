let GlobalNumber = 0;

const outerFunction = () => {
    GlobalNumber++;
    let count = 0;
    return () => {
        count++;
        return count;
    };
};

const counter = outerFunction();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(GlobalNumber);
