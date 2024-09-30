import express from "express";

import UserControllers from "../controllers/user.contollers";

const router = express.Router();

router.get("/user", UserControllers.getUserEmail);

export default router;
