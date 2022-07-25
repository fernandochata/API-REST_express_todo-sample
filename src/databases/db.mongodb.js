import mongoose from "mongoose";
import 'dotenv/config';

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_DATABASE = process.env.MONGO_DATABASE

const mongo_uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority` || 'mongodb://localhost:27017/todos';

export const connectToMongoDB = async () => {
    const db = await mongoose.connect(mongo_uri);
    console.log(`MongoDB connected: ${db.connection.host}`);
}

export default connectToMongoDB;