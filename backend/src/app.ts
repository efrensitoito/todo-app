import "dotenv/config";

import express from "express";
import cors from "cors";


const app = express();

// Middlewares
app.use(cors());
app.use(express());

// Routes
// ------

export default app;