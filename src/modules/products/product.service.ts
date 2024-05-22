import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    const result = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
        { tags: regex },
      ],
    });
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
};

const updateProductInDB = async (id: string, payLoad: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payLoad, { new: true });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
