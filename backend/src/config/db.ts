import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    try {
        const uri = process.env.MONGO_URI as string;

        if (!uri) {
            throw new Error('MONGO_URI not defined');
        }

        await mongoose.connect(uri);

        console.log('MongoDB connected');

    } catch (error) {
        console.error('Error connecting => ', error);
        process.exit(1);
    }
}