import express from "express";
import cors from "cors";
import { users } from "./data/users.js";

const app = express();
// Middleware
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.json({ limit: "16kb" }));
app.use(cors({ origin: "http://localhost:5173" }));

app.get("/users", async (req, res) => {
    res.status(200).json({
        users,
        message: "User Fetch Successfully",
    });
});

app.listen(8000, () => {
    console.log(`Server Listening On PORT: 8000`);
});
