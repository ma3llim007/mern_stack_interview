function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if (iterationCount < end) {
                result = { value: nextStart, done: false };
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true };
        },
    };
}

const myIterator = makeIterator(1, 20);
let result = myIterator.next();

// while (!result.done) {
//     console.log(result.value);
//     result = myIterator.next();
// }

// generators function
function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}
// console.log(count);

// now Create a makeIterator function with generator function
function* makeMyIterator(start, end, stepSize = 1) {
    for (let i = start; i <= end; i += stepSize) {
        yield i;
    }
}

const one = makeMyIterator(1 , 10, 2);
for (const value of one) {
    console.log(value);
}
