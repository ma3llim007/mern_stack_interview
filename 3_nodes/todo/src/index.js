import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
    .then(() => {
        app.listen(8000, () => {
            console.log(`⚙️  SERVER IS RUNNING: http://localhost:8000/`);
        });
    })
    .catch((error) => {
        console.log(`💀 DATABASE CONNECTIION FAILED`, error.message);
        
    });
