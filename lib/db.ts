import mongoose from 'mongoose'


let isConnected = false

export async function connectDB() {

    if (isConnected) {
        return
    }

    if (!process.env.MONGO_URI) {
        throw new Error('Please provide MONGO_URI in environment variables')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:', error)
        throw error
    }
}