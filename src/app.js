import express from "express";
import productRoute from "./routes/productRoutes.js"

constapp=express();

appendFile.use(express.json());
appendFile.use("/api/productos",productRoutes);

export default app;
