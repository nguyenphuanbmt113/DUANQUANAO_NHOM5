import asyncHandler from "express-async-handler";
import Order from "../model/orderModel";
export const getOrders = asyncHandler(async (req, res) => {
  const page = req?.params?.page || 1;
  try {
    const limit = 5;
    const skip = (page - 1) * limit;
    const orders = await Order.find()
      .populate("productId")
      .populate("userId")
      .limit(limit)
      .skip(skip)
      .sort("-updatedAt")
      .exec();
    const count = await Order.countDocuments();
    return res.status(200).json({
      mes: orders ? "get orders success" : "failed to get orders",
      orders,
      totalPage: Math.ceil(count / limit),
      count,
    });
  } catch (error) {
    throw new Error(error);
  }
});