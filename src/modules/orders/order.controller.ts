import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderServices } from "./oeder.service";

// Create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderInDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    if (
      err.message === "Product not found" ||
      err.message === "Insufficient quantity available in inventory"
    ) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: err.message || "Something went wrong",
        error: err,
      });
    }
  }
};

// Retrieve all orders or orders by user email
const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let result;

    if (email) {
      result = await OrderServices.getOrdersByEmail(email as string);
      if (!result || result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for email: ${email}`,
        data: result,
      });
    } else {
      result = await OrderServices.getAllOrders();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getOrders,
};
