import asyncHandler from "express-async-handler";
import Order from "../model/orderModel";
export const getOrders = asyncHandler(async (req, res) => {
  const query = req.query;
  const page = req?.query?.page || 1;
  const option = query.userId ? { userId: query.userId } : {};
  try {
    const limit = 5;
    const skip = (page - 1) * limit;
    const orders = await Order.find(option)
      .populate("productId")
      .populate("userId")
      .limit(limit)
      .skip(skip)
      .sort("-updatedAt")
      .exec();
    const count = await Order.find(option).countDocuments();
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
export const getDetailOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id)
      .populate("productId")
      .populate("userId");
    return res.status(200).json({
      mes: order ? "get order success" : "failed to get order",
      details: order,
    });
  } catch (error) {
    throw new Error(error);
  }
});