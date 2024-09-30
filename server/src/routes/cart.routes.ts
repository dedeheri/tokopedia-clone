import express from "express";

import CartControllers from "../controllers/cart.controllers";

const router = express.Router();

router.get("/cart/:userId", CartControllers.getCart);
router.post("/cart/add", CartControllers.addCart);

export default router;
