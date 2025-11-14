import { Router } from "express";
import {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}from "../controllers/productController.js"

const router=Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/:id", crearProducto);
router.put("/", actualizarProducto);
router.get("/:id", eliminarProducto);

export default Router;