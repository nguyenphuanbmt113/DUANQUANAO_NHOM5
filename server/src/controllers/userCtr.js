import asyncHandler from "express-async-handler";
import _ from "lodash";
import { createToken } from "../config/jsonwebtoken";
import User from "../model/userModel";
export const register = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, mobile } = req.body;
  if (!firstname || !lastname || !email || !password || !mobile) {
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
  if (user && user.comparePassword(user.password)) {
    //tạo token
    const access_token = await createToken(user._id, user.role);
    return res.status(200).json({
      success: 0,
      mes: "login user success",
      access_token,
      user,
    });
  } else {
    return res.status(500).json({
      success: -1,
      mes: "failed to login user",
    });
  }
});
