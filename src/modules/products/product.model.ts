import schema, { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const varientSchema = new Schema<TVariant>({
  type: String,
  value: String,
});

const inventorySchema = new Schema<TInventory>({
  quantity: Number,
  inStock: Boolean,
});

const productSchema = new Schema<TProduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [varientSchema],
  inventory: inventorySchema,
});

export const Product = model<TProduct>("Product", productSchema);
