//src/controllers/productController.js
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../models/productModel.js";
export const obtenerProductos = async (req, res) => {
    const productos = await getAllProducts();
    res.json(productos);
};
export const obtenerProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await getProductById(id);
    res.json(producto);
};
export const crearProducto = async (req, res) => {
    const nuevo = await createProduct(req.body);
    res.status(201).json(nuevo);
};
export const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const actualizado = await updateProduct(id, req.body);
    res.json(actualizado);
};
export const eliminarProducto = async (req, res) => {
    const { id } = req.params;
    const resultado = await deleteProduct(id);
    res.json(resultado);
};