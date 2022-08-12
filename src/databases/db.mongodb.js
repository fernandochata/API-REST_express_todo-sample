import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_USER = process.env.MONGO_USER || fernando
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || fernando
const MONGO_HOST = process.env.MONGO_HOST || localhost
const MONGO_DATABASE = process.env.MONGO_DATABASE || mydb

// mongodb://localhost:27017/todos

const mongo_uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`

export const connectToMongoDB = async () => {
    const db = await mongoose.connect(mongo_uri)
    console.log(`MongoDB connected: ${db.connection.host}`)
}

export default connectToMongoDB;