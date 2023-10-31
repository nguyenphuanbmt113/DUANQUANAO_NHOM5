import express from "express";
import * as handleCtr from "../controllers/userCtr";
const router = express.Router();
router.post("/register", handleCtr.register);
router.post("/login", handleCtr.login);
export default router;
