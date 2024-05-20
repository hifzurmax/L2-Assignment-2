import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/products", ProductRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Main route ok");
// });

export default app;
