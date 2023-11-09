import express from "express";
import * as handleCtr from "../controllers/userCtr";
const router = express.Router();
router.post("/register", handleCtr.register);
router.post("/login", handleCtr.login);
router.post("/login-user", handleCtr.loginUser);
export default router;
router.post("/forgotPassword", handleCtr.fotgotPassword);
router.put("/resetpassword", handleCtr.resetPassword);
