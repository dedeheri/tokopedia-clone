import express from "express";

import ProductsControllers from "../controllers/product.controllers";

const router = express.Router();

router.get("/products", ProductsControllers.getAll);
router.post("/products/add", ProductsControllers.add);
router.get("/products/store/:storeId", ProductsControllers.getByStore);
router.get("/products/search", ProductsControllers.getProductBySearch);
router.get("/products/:product", ProductsControllers.getProductDetails);

export default router;
