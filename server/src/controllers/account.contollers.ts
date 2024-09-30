import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Helper } from "../herper";
import AccountSevices from "../services/account-services";
import UserSevices from "../services/user.services";
import removeDomain from "../utils/remove-domain.utils";

class AccountControllers {
  public static async signup(request: Request, response: Response) {
    try {
      const email = request.body.email;
      const password = request.body.password;

      // provider
      const fullName = request.body.fullName;
      const image = request.body.image;
      const providerType = request.body.providerType;
      const providerId = request.body.providerId;

      const accounts = await AccountSevices.findOne(email);

      // check email already exist
      if (accounts) {
        return Helper.responseJsonHandler(
          "Email already exist",
          null,
          409,
          response
        );
      }

      // if login via provider
      if (providerId) {
        const account = await AccountSevices.create({
          providerType: providerType,
          providerId: providerId,
          email: email,
        });

        const users = await UserSevices.create({
          accountId: account?.id,
          email: account?.email,
          fullName: fullName,
          image: image,
        });

        return Helper.responseJsonHandler("Successfully", users, 200, response);
      }

      // hass password
      const hash = await bcrypt.hash(password, 10);
      const account = await AccountSevices.create({
        email,
        password: hash,
      });

      const users = await UserSevices.create({
        accountId: account?.id,
        email: account?.email,
        fullName: removeDomain(account?.email),
      });

      return Helper.responseJsonHandler("Successfully", users, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async signin(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const accounts = await AccountSevices.findOne(email);

      // check email is registration
      if (!accounts) {
        return Helper.responseJsonHandler(
          "Email belum terdaftar",
          null,
          404,
          response
        );
      }

      // check password compare

      const passwordCompare = await bcrypt.compare(
        password,
        accounts?.password
      );

      if (!passwordCompare) {
        return Helper.responseJsonHandler(
          "Kata sandi salah",
          null,
          409,
          response
        );
      }

      const accessToken = jwt.sign({ _id: accounts?.id }, "jwt-key-secret");
      const user = await UserSevices.findOne({ accountsId: accounts?.id });

      response.cookie("token", accessToken);

      const result = {
        user,
        accessToken,
      };

      return Helper.responseJsonHandler("Successfully", result, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }
}

export default AccountControllers;
