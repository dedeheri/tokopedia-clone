import { Request, Response } from "express";

import { Helper } from "../herper";
import PaymentSevices from "../services/payment-sevices";

class PaymentControllers {
  public static async create(request: Request, response: Response) {
    try {
      const userId = request.body.userId;
      const productId = request.body.productId;
      const specification = request.body.specification;

      const payment = await PaymentSevices.findOne(userId);

      const data = {
        userId,
        productId,
        specification,
      };

      //   If payment data is available, update the data
      if (payment) {
        await PaymentSevices.findByIdAndUpdate(payment?.id, {
          productId,
          specification,
        });
      } else {
        await PaymentSevices.create(data);
      }

      return Helper.responseJsonHandler("Successfully", null, 200, response);
    } catch (error) {
      console.log(error);
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async findOne(request: Request, response: Response) {
    try {
      const userId = request.params.userId as string;
      const payment = await PaymentSevices.findOne(userId);

      if (!payment) {
        return Helper.responseJsonHandler(
          "Payment products not found",
          payment,
          404,
          response
        );
      }
      return Helper.responseJsonHandler("Successfully", payment, 200, response);
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

export default PaymentControllers;
