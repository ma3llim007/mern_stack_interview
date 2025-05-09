// Memoized Function
function memoizedFactorial() {
    const cache = {};

    function factorial(n) {
        if (n <= 1) return 1;

        if (cache[n]) {
            console.log(`Fetching from cache: factorial(${n})`);
            return cache[n];
        }
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }

    return factorial;
}

const factorial = memoizedFactorial();


console.log(factorial(5)); // Calculates and caches
console.log(factorial(6)); // Uses cached result for factorial(5)
console.log(factorial(5)); // Fetches directly from cache