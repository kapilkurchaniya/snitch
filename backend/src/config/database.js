import mongoose from 'mongoose';
import { config } from './config.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MongoURI);
        console.log(`MongoDB Connected: ${config.port}`);
    } catch (error) {
        console.log(error);
        process.exit(1);``
    }
};

export default connectDB;