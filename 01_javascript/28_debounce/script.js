// Debounce function
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearInterval(timeoutId);
        timeoutId = setInterval(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Simulate API Call
function fetchData(query) {
    if (!query) return;
    console.log("Fetching Data for: ", query);

    setTimeout(() => {
        document.getElementById("results").innerText = `Results for "${query}"`;
    }, 500);
}

// Debounce version of fetchData
const debounceFetch = debounce(fetchData, 3000);

// Event Listener
document.getElementById("searchInput").addEventListener("input", (e) => {
    const query = e.target.value.trim();
    debounceFetch(query)
});
