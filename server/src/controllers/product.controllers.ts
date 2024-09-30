import { Request, Response } from "express";

import { Helper } from "../herper";
import ProductSevices from "../services/product.services";

class ProductsControllers {
  public static async getAll(request: Request, response: Response) {
    try {
      const product = await ProductSevices.find();

      const random = product.sort(() => Math.random() - 0.5);

      return Helper.responseJsonHandler("Successfully", random, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Product not found",
        null,
        500,
        response
      );
    }
  }

  public static async add(request: Request, response: Response) {
    try {
      const body = request.body;

      const regexProductName = body.name
        .replace(/[^\w\s]/g, "-")
        .replace(/\s+/g, "-")
        .replace(/[\[\]/]/g, "-")
        .replace(/[-,]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLocaleLowerCase();

      const product = await ProductSevices.create({
        ...body,
        handle: regexProductName,
      });

      return Helper.responseJsonHandler("Successfully", product, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Product not found",
        null,
        500,
        response
      );
    }
  }

  public static async getProductDetails(request: Request, response: Response) {
    try {
      const productName = request.params.product;

      const product = await ProductSevices.findOne({
        handle: productName,
      });

      if (!product) {
        return Helper.responseJsonHandler(
          "Products not Found",
          null,
          404,
          response
        );
      }

      return Helper.responseJsonHandler("Successfully", product, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async getByStore(request: Request, response: Response) {
    try {
      const storeId = request.params.storeId;
      const product = await ProductSevices.findById({ storeId });

      return Helper.responseJsonHandler("Successfully", product, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async getProductBySearch(request: Request, response: Response) {
    try {
      const query = request.query.q as string;

      const product = await ProductSevices.find({
        name: { $regex: query, $options: "i" },
      });

      if (product?.length === 0) {
        return Helper.responseJsonHandler(
          "Product not found",
          [],
          404,
          response
        );
      }

      return Helper.responseJsonHandler("Successfully", product, 200, response);
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

export default ProductsControllers;
