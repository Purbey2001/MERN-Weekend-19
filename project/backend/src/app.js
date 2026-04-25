import express from "express";
// import dontenv from "dotenv";

const app = express();
app.get("/api/health", (req, res) => {
  res.send("OK");
});

export default app;
