import express from "express";

import accountContollers from "../controllers/account.contollers";
import formValidation from "../middlewares/form-validation";

import { signUpZod } from "../libs/zod/account-zod";

const router = express.Router();

router.post(
  "/account/signup",
  formValidation(signUpZod),
  accountContollers.signup
);

router.post(
  "/account/signin",
  formValidation(signUpZod),
  accountContollers.signin
);

export default router;
