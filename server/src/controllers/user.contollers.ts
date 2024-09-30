import { Request, Response } from "express";

import { Helper } from "../herper";
import UserSevices from "../services/user.services";

class UserControllers {
  public static async getUserEmail(request: Request, response: Response) {
    try {
      const email = request.query.email;

      const user = await UserSevices.findOne({ email: email });

      return Helper.responseJsonHandler("Successfully", user, 200, response);
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

export default UserControllers;
