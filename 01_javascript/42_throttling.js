function throttle(fn, interVal) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interVal) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

window.addEventListener(
    "scroll",
    throttle(function () {
        console.log("Scroll position:", window.scrollY);
    }, 200)
);
