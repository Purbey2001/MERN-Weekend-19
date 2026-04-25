import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { loginLimitter } from "../config/rateLimit.config.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", loginLimitter, login);

export default authRouter;
