import "dotenv/config";

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", async (req, res) => {
  try {
    res.status(200).json({ status: "ok", message: "Server and DB Running!" });
  } catch (error) {
    res.status(500).json({ status: "ok", message: "Server with no health!!" });
  }
});

// Routes
app.use("/api/tasks", taskRoutes);

export default app;
