import asyncHandler from "../utils/asyncHandler.utils.js";
import User from "../models/user.model.js";
import ApiError from "../utils/errorHandler.utils.js";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  if (req.user?.role !== "admin") {
    throw new ApiError(403, "Access denied. Admins only.");
  }
  
  const users = await User.find().select("-password");
  
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  const userId = req.user?._id;
  
  if (!userId) {
    throw new ApiError(401, "User not authenticated");
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: req.body },
    { new: true, runValidators: true }
  ).select("-password");

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: updatedUser,
  });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.user?._id;

  if (!userId) {
    throw new ApiError(401, "User not authenticated");
  }

  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: null,
  });
});
