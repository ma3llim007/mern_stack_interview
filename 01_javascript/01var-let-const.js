function testScope() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;

        console.log("Inside block:");
        console.log("var x =", x);
        console.log("let y =", y);
        console.log("const z =", z);
    }

    console.log("OutSide Block");
    console.log("var x =", x);

    try {
        console.log("let y =", y); // Error: y is not defined
    } catch (error) {
        console.log("let y = Error:", error.message);
    }

    try {
        console.log("const z =", z); // Error: z is not defined
    } catch (error) {
        console.log("const z = Error:", error.message);
    }
}

testScope();
