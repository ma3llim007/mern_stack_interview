const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
    // Set Response Headers

    // Handle Routes
    if (req.url === "/") {
        res.end("Welcome to the Home Page");
    } else if (req.url === "/about") {
        res.end("Welcome to the about Page");
    } else if (req.url === "/contact") {
        res.end("Welcome to the contact Page");
    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
});

// Start the server
server.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});
