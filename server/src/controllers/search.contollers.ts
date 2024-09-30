import { Request, Response } from "express";
import { Helper } from "../herper";
import ProductSevices from "../services/product.services";

class SearchContollers {
  public static async searchTerm(request: Request, response: Response) {
    try {
      const query = request.query.query;

      const product = await ProductSevices.find({
        name: { $regex: query, $options: "i" },
      });

      if (product?.length == 0) {
        return Helper.responseJsonHandler(
          "Product not available",
          [],
          404,
          response
        );
      }

      const result: any = [];

      product.forEach((items) => {
        result.push(items?.name);
      });

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

export default SearchContollers;
