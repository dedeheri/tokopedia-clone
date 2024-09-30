import { populate } from "dotenv";
import cart from "../models/cart.model";

class CartSevices {
  static async create(body: any) {
    return await cart.create(body);
  }

  static async find(props: any) {
    return await cart
      .find(props)
      .populate("store")
      .populate("cart.product")
      .exec();
  }

  static async findOne(props: any) {
    return await cart.findOne(props);
  }

  static async findByIdAndUpdate(id: string, props: any) {
    return await cart.findByIdAndUpdate(id, props);
  }
}

export default CartSevices;
