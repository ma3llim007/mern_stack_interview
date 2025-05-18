const button = document.getElementById("clickMe");
button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
});

const menu = document.getElementById("menu");
menu.addEventListener("click", (e) => {
    if ((e.target.tagName = "LI")) {
        console.log("You clicked:", event.target.textContent);
    }
});
