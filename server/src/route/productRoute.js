import express from "express";
import * as productCtr from "../controllers/productCtr";
import { isAdmin, verifyAccess } from "../middleware/verifyAccess";
const router = express.Router();
router.post("/create", [verifyAccess, isAdmin], productCtr.createProduct);
// router.get("/all", categoryCtr.getAllCategory);
router.get(
  "/get-product",
  [verifyAccess, isAdmin],
  productCtr.getProductsByQuery
);
// router.delete(
//   "/delete/:id",
//   [verifyAccess, isAdmin],
//   categoryCtr.deleteCategory
// );
router.put("/update/:id", [verifyAccess, isAdmin], productCtr.updateProduct);
router.get("/:id", productCtr.getProduct);

export default router;
