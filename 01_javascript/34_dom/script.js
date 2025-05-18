const heading1 = document.getElementById("heading1");
console.log(heading1);

// Add New Element
const heading2 = document.createElement("h2");
heading2.textContent = "Heading Two";
document.body.appendChild(heading2)


let div = document.getElementById("myDiv");
div.innerHTML = "<b>Hello</b>";
