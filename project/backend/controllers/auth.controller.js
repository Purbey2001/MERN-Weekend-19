import asyncHandler from "../utils/asyncHandler.utils.js";

export const register = asyncHandler(async (req, res, next) => {
  // TODO: Implement register logic
  res.status(201).json({ message: "Register successful" });
});

export const login = asyncHandler(async (req, res, next) => {
  // TODO: Implement login logic
  res.status(200).json({ message: "Login successful" });
});
