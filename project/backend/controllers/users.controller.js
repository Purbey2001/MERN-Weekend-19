import asyncHandler from "../utils/asyncHandler.utils.js";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  // TODO: Implement get all users logic
  res.status(200).json({ message: "Get all users successful" });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  // TODO: Implement update profile logic
  res.status(200).json({ message: "Update user successful" });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  // TODO: Implement delete profile logic
  res.status(200).json({ message: "Delete user successful" });
});
