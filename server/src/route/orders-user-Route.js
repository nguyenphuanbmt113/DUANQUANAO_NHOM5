import express from "express";
import * as orderCtr from "../controllers/orderCtr";
import { verifyAccess } from "../middleware/verifyAccess";
const router = express.Router();

router.get("/get-order", [verifyAccess], orderCtr.getOrders);
router.get("/get-detailorder/:id", [verifyAccess], orderCtr.getDetailOrder);

export default router;