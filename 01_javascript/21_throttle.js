function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

function logMessage() {
    console.log("Function executed at", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000); // Limit to once every 2 seconds

// Simulate rapid calls (like a burst of events)
let interval = setInterval(() => {
    throttledLog();
}, 500); // Attempt to run it every 500ms

// Stop simulation after 10 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped after 10 seconds.");
}, 10000);
