import express, { Request, Response } from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", productControllers.createProduct);
router.get("/:productId", productControllers.getProductById);
router.get("/", productControllers.getAllProducts);
router.put("/:productId", productControllers.updateProduct);

export const ProductRoutes = router;
