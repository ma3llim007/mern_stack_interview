import express from "express";
import generalRoutes from "./routes/general.routes.js";
import multipleRoutes from "./routes/multiple.routes.js";

const app = express();

// Routes
app.use("/students", generalRoutes);
// Custom middleware for logging
app.use((req, res, next) => {
    const now = new Date().toLocaleString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
});
app.use("/multiple", multipleRoutes);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server error: " + err.message);
});

export default app;
