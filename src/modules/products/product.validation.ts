import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string().min(1, { message: "Type is required" }),
  value: z.string().min(1, { message: "Value is required" }),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: "Quantity must be a non-negative number" }),
  inStock: z.boolean({ required_error: "In-stock status is required" }),
});

const productValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category is required" }),
  tags: z
    .array(z.string().min(1, { message: "Tag cannot be empty" }))
    .min(1, { message: "At least one tag is required" }),
  variants: z
    .array(variantValidationSchema)
    .min(1, { message: "At least one variant is required" }),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
