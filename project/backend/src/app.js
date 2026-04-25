import express from "express";
import authController from "../controllers/auth.controller.js";
import usersController from "../controllers/users.controller.js";

const app = express();

app.use("/api/auth/v1", authController);
app.use("/api/users/v1", usersController);
app.get("/api/health", (req, res) => {
  res.send("OK");
});

export default app;
