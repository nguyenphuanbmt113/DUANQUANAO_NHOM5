import asyncHandler from "express-async-handler";
import _ from "lodash";
import { createToken } from "../config/jsonwebtoken";
import User from "../model/userModel";
export const register = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    throw new Error("Missing data");
  }
  const user = await User.create(req.body);
  return res.status(200).json({
    success: user ? 0 : -1,
    mes: user ? "Create user success" : "failed to create user",
    user,
  });
});
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Missing data");
  }
  const user = await User.findOne({
    email,
    role: "admin",
  });
  if (user && (await user.comparePassword(password))) {
    //tạo token
    const access_token = await createToken(user._id, user.role);
    return res.status(200).json({
      mes: "login user success",
      access_token: access_token,
      user: user,
    });
  } else {
    return res.status(500).json({
      success: -1,
      mes: "failed to login user",
    });
  }
});
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Missing data");
  }
  const user = await User.findOne({
    email,
    role: "user",
  });

  if (user && (await user.comparePassword(password)) === true) {
    //tuserạo token
    const access_token = await createToken(user._id, user.role);
    return res.status(200).json({
      mes: "login user success",
      access_token: access_token,
      user,
    });
  } else {
    return res.status(500).json({
      success: -1,
      mes: "failed to login user",
    });
  }
});
