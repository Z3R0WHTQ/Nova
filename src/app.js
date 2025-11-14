import express from "express";
import productRoute from "./routes/productRoutes.js"

const app=express();

app.use(express.json());
app.use("/api/productos",productRoute);

export default app;
