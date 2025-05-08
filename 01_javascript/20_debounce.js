function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function handleSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(handleSearch, 500);

debouncedSearch("a")
debouncedSearch("ab")
debouncedSearch("abc")
debouncedSearch("abcd")
debouncedSearch("abcde")