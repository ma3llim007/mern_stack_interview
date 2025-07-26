import app from "./app.js";
import connectDB from "./db/index.js";
import dotEnv from "dotenv";

dotEnv.config();

connectDB()
    .then(() => {
        app.listen(8000, () => {
            console.log(`⚙️  Server is Running at PORT : 8000`);
        });
    })
    .catch((error) => {
        console.error("💀 MONGODB CONNECTION FAILED !!! ", error.message);
    });
