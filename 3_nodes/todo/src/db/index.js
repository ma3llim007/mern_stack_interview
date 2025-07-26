import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/base");
        console.log(`📦 MONGODB CONNECTED DBHOST: ${connectionInstance.connection.host} DBNAME: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.error("💀 MONGODB CONNECTIION FAILED: ", error.message);
        process.exit(1);
    }
};

export default connectDB;
