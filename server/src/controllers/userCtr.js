import asyncHandler from "express-async-handler";
import _ from "lodash";
import crypto from "crypto";
import { createToken } from "../config/jsonwebtoken";
import { sendEmail } from "../config/sendEmail";
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
  console.log("user:", user)
  console.log(">check,:", await user.comparePassword(password));
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

  if (user && (await user.comparePassword(password))) {
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
export const fotgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(">>>", req.body);
  if (!email) throw new Error("Missing email");
  const user = await User.findOne({
    email,
  });
  if (!user) throw new Error("Can not found user");
  //tao token cho password
  const resetToken = await user.createPasswordChangedToken();
  await user.save();
  const html = `Xin vui lòng click vào link dưới đây để thay đổi mật khẩu của bạn.Link này sẽ hết hạn sau 15 phút kể từ bây giờ. <a href=${process.env.CLIENT_URL}/resetpassword/${resetToken}>Click here</a>`;
  const rs = await sendEmail({ email, html });
  return res.status(200).json({
    success: true,
    rs,
  });
});
export const resetPassword = asyncHandler(async (req, res) => {
  const { newPassword, tokenReset } = req.body;
  console.log("newPassword:", newPassword);
  if (!tokenReset) throw new Error("Can not reset password");
  if (!newPassword) throw new Error("Missing inputs");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(tokenReset)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: passwordResetToken,
  });
  console.log("user:", user);
  if (!user) throw new Error("Invalid reset token");
  user.password = newPassword;
  user.passwordResetToken = undefined;
  user.passwordChangedAt = Date.now();
  user.passwordResetExpires = undefined;
  await user.save();
  return res.status(200).json({
    success: user ? true : false,
    mes: user ? "Updated password" : "Something went wrong",
  });
});
