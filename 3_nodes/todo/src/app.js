import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use("/", todoRoutes);

export default app;
