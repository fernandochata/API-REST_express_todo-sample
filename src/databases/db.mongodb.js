import mongoose from "mongoose";
import 'dotenv/config';

const mongo_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/todos';

const connectToMongoDB = async () => {
    const db = await mongoose.connect(mongo_uri);
    console.log(`MongoDB connected: ${db.connection.host}`);
}

export default connectToMongoDB;