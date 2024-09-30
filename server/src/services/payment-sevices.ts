import payment from "../models/payment.model";
import { IPayment } from "../types/payment.types";

class PaymentSevices {
  static async create(body: IPayment) {
    return await payment.create(body);
  }

  static async findOne(userId: string) {
    return await payment
      .findOne({ userId })
      .populate({ path: "productId", populate: { path: "storeId" } });
  }

  static async findByIdAndUpdate(id: string, data: any) {
    return await payment.findByIdAndUpdate(id, data, { new: true });
  }
}

export default PaymentSevices;
