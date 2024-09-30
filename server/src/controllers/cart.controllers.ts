import { Request, Response } from "express";
import { Helper } from "../herper";
import CartSevices from "../services/cart.services";

class CartControllers {
  public static async addCart(request: Request, response: Response) {
    try {
      const userId = request.body.userId as string;
      const productId = request.body.productId as string;
      const storeId = request.body.storeId as string;
      const total = request.body.total as number;
      const color = request.body.color as string;
      const storage = request.body.storage as string;

      const cart = await CartSevices.find({ userId });

      const data = {
        userId,
        store: storeId,
        cart: {
          product: productId,
          color,
          storage,
          totalProduct: total,
        },
      };
      if (cart.length === 0) {
        await CartSevices.create(data);
      } else {
        const store = await CartSevices.findOne({ store: storeId });
        if (store) {
          await CartSevices.findByIdAndUpdate(store?.id, {
            $push: {
              cart: {
                product: productId,
                color,
                storage,
                totalProduct: total,
              },
            },
          });
        } else {
          await CartSevices.create(data);
        }
      }

      return Helper.responseJsonHandler(
        "Seccessfully add to Cart",
        null,
        200,
        response
      );
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async getCart(request: Request, response: Response) {
    try {
      const userId = request.params.userId;
      const cart = await CartSevices.find({ userId });

      const total: Array<Number> = [0];

      if (cart?.length > 0) {
        cart.map((ctx) => {
          ctx?.cart?.map((crt) => total.push(crt?.totalProduct));
        });
      }

      const reduceTotal = total.reduce((acc: any, curr: any) => acc + curr, 0);

      const data = {
        result: cart,
        totalCount: reduceTotal,
      };

      cart?.length === 0
        ? Helper.responseJsonHandler("Cart not found", null, 404, response)
        : Helper.responseJsonHandler("Seccessfully", data, 200, response);
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
}

export default CartControllers;
