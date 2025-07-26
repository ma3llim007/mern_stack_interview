import express from "express";
import logger from "./utils/logger.js";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));

// Routes
app.get("/warn", (req, res) => {
    logger.warn("Warning route triggered");
    res.send("This is a warning log");
});

app.get("/error", (req, res) => {
    logger.error("Error occurred on /error route");
    res.status(500).send("Internal Server Error");
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server error: " + err.message);
});

app.listen(8000, () => {
    console.log(`⚙️  Server is Running at PORT : 8000`);
});

let requestHandler = (path) => {
    // const profiler = OrderLogger.startTimer();
    let sum = 0;
    const number = 10000;
    for (let i = 0; i < number; i++) {
        sum += sum + i;
    }

    // profiler.done({ message: `Request To ${path} Processed` });
};

requestHandler("/payment");
