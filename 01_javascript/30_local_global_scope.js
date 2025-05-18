let globalVar = "I Am Global";

function show() {
    console.log(globalVar);
}

show();

function show2() {
    let message = "message is in local scope";
    console.log(message);
}

show2();
