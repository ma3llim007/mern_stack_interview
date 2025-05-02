// console.log("Start....");

// setTimeout(() => {
//     console.log("setTimeout CallBack");
// });

// Promise.resolve().then(() => {
//     console.log("Promise CallBack");
// });

// console.log("End...");

// ANOTHER EXAMPLE
console.log("⌛ Waiter: Order Received");

setTimeout(() => {
    console.log("🍕 Pizza Is Ready");
}, 3000);

fetch("https://dummyjson.com/products/1").then(() => console.log("📦 API Response Received"));

Promise.resolve().then(() => console.log("✅ Quick Billing Done!"));

console.log("🍽️  Serving Water...");
