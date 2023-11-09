import express from "express";
import * as orderCtr from "../controllers/orderCtr";
import { verifyAccess, isAdmin } from "../middleware/verifyAccess";
const router = express.Router();

router.get("/get-order/:page?", [verifyAccess, isAdmin], orderCtr.getOrders);

export default router;