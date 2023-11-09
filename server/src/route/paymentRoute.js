import express from "express";
import * as paymentCtr from "../controllers/paymentCtr";
require("dotenv").config();

const router = express.Router();
router.post("/create-checkout-session", paymentCtr.paymentHandler);

export default router;