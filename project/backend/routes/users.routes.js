import express from "express";
import { getAllUsers, updateUser, deleteUser } from "../controllers/users.controller.js";
import { getAllUsersLimiter, updateProfileLimiter, deleteProfileLimiter } from "../config/rateLimit.config.js";

const usersRouter = express.Router();

usersRouter.get("/allusers", getAllUsersLimiter, getAllUsers);
usersRouter.put("/update", updateProfileLimiter, updateUser);
usersRouter.delete("/delete", deleteProfileLimiter, deleteUser);

export default usersRouter;
