var x = [];
function createSomeNodes() {
    var div,
        i = 100,
        frag = document.createDocumentFragment();
    for (; i > 0; i--) {
        div = document.createElement("div");
        div.appendChild(document.createTextNode(i + " - " + new Date().toLocaleDateString()));
        frag.appendChild(div);
    }
    document.getElementById("nodes").appendChild(frag);
}

function grow() {
    x.push(new Array(10000).join("x"));
    createSomeNodes();
    setInterval(grow, 1000);
}
