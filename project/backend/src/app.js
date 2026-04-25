import express from "express";
import authRouter from "../routes/auth.routes.js";
import usersRouter from "../routes/users.routes.js";

const app = express();

app.use(express.json()); // adding this so req.body can be read in POST requests
app.use("/api/auth/v1", authRouter);
app.use("/api/users/v1", usersRouter);
app.get("/api/health", (req, res) => {
  res.send("OK");
});

export default app;
