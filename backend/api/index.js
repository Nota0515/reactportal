// /api/index.js
import express from "express";
import { DB_URI, NODE_ENV } from "../config/env.js";
import mongoose from "mongoose";
import Jobs from "../models/jobs.model.js";

const app = express();

// Connect once at cold start
if (!global._mongoConnected) {
  mongoose.connect(DB_URI, { /* options */ })
    .then(() => {
      console.log(`✅ MongoDB connected in ${NODE_ENV} mode`);
      global._mongoConnected = true;
    })
    .catch(err => {
      console.error("❌ MongoDB connection error", err);
    });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access‑Control‑Allow‑Origin", "*");
  res.header("Access‑Control‑Allow‑Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access‑Control‑Allow‑Headers", "Content‑Type,Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

export default app;
