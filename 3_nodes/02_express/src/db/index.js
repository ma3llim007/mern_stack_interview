import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/test");
        console.log(`🛠️  MONGODB Connected! DB HOST: ${connectionInstance.connection.host} DB NAME: ${connectionInstance.connection.db.databaseName}`);
    } catch (error) {
        console.error("💀  MONGODB CONNETION ERROR ", error.message);
        process.exit(1);
    }
};

export default connectDB;
