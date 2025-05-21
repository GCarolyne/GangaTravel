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

const reactStaticDir = new URL("../client/dist", import.meta.url).pathname;
const uploadsStaticDir = new URL("public", import.meta.url).pathname;

app.use(express.static(reactStaticDir));

app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get("/api/test", async (req, res) => {
  res.send("Hello, world!");
});

app.post("/api/outreach", async (req, res, next) => {
  try {
    const formData = req.body;
    if (formData === undefined) {
      throw new ClientError(400, "please fill out the form properly.");
    }
    const sql = `
        insert into "customer" ("firstName","lastName","phoneNumber","email")
        values($1,$2,$3,$4)
        returning *`;
    const params = [
      formData.firstName,
      formData.lastName,
      formData.phoneNumber,
      formData.email,
    ];
    const response = await db.query(sql, params);
    if (!response) throw new Error("response failed");
    res.json(response.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.get("*", (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
