import dotenv from "dotenv";
import express from "express";
import logger from "./lib/logger.js";
import completionRouter from "./views/completions.js";

// Configure environment
dotenv.config();

// Constants
const PORT = process.env.PORT || 3000;

// Initialize server
const app = express();

// Routers
app.use(express.json());
app.use("/completion", completionRouter);

// Start server
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
