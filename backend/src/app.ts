import "dotenv/config";

import express from "express";
import cors from "cors";


const app = express();

// Middlewares
app.use(cors());
app.use(express());

// Health check endpoint
app.get('/health', async (req,res) => {
    try {
        res.status(200).json({ status: 'ok', message: 'Server and DB Running!'})
    } catch (error) {
        res.status(500).json({ status: 'ok', message: 'Server with no health!!'})
    }
});

// Routes
// ------

export default app;