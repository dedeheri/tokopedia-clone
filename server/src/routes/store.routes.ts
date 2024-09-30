import express from "express";

import StoreControllers from "../controllers/store.controllers";

const router = express.Router();

router.post("/store/add", StoreControllers.create);
router.get("/store/products/:id", StoreControllers.findByStore);

export default router;
