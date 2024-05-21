import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
