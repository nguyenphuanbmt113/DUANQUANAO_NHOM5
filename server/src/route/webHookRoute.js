import express from "express";
import * as paymentCtr from "../controllers/paymentCtr";
require("dotenv").config();
import { verifyAccess } from "../middleware/verifyAccess";
const router = express.Router();
router.post(
  "/",
  express.raw({ type: "application/json" }),
  paymentCtr.handlerWebhook
);
router.get("/verify-payment/:id", verifyAccess, paymentCtr.paymentVerify);

export default router;