import express from "express";
import { getAllUsers, updateUser, deleteUser } from "../controllers/users.controller.js";
import { getAllUsersLimiter, updateProfileLimiter, deleteProfileLimiter } from "../config/rateLimit.config.js";
import verificationToken from "../middleware/verifyToken.middle.js";

const usersRouter = express.Router();

usersRouter.get("/allusers", verificationToken, getAllUsersLimiter, getAllUsers);
usersRouter.put("/update", verificationToken, updateProfileLimiter, updateUser);
usersRouter.delete("/delete", verificationToken, deleteProfileLimiter, deleteUser);

export default usersRouter;
