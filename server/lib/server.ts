import "dotenv/config";
import pg from "pg";
import express from "express";
import { ClientError, errorMiddleware } from "./lib/index.js";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL_GANGA,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get("/api/test", async (req, res) => {
  res.send("Hello, world!");
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
