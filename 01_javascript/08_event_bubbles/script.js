const parent = document.getElementById("parentList");

parent.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        alert("You Clicked: " + e.target.textContent)
    }
});
