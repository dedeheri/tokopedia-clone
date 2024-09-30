import express from "express";
const router = express.Router();

import PaymentControllers from "../controllers/payment.contollers";

router.post("/payment/add", PaymentControllers.create);
router.get("/payment/:userId", PaymentControllers.findOne);

export default router;
