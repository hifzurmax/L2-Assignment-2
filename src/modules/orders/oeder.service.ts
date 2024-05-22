import { Order } from "./order.model";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";

import mongoose from "mongoose";

const createOrderInDB = async (orderData: TOrder) => {
  try {
    const product = await Product.findById(orderData.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    if (orderData.quantity > product.inventory.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    const order = new Order(orderData);
    const result = await order.save();
    return result;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      throw new Error("Product not found");
    }
    throw error;
  }
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

const getOrdersByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrderInDB,
  getAllOrders,
  getOrdersByEmail,
};
