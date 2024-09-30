import { Request, Response } from "express";

import { Helper } from "../herper";
import StoresSevices from "../services/store.services";

class StoreControllers {
  public static async create(request: Request, response: Response) {
    try {
      const body = request.body;

      const storeName = body?.name?.replace(/ /g, "").toLocaleLowerCase();

      const store = await StoresSevices.create({
        ...body,
        handle: storeName,
      });

      return Helper.responseJsonHandler("Successfully", store, 200, response);
    } catch (error) {
      return Helper.responseJsonHandler(
        "Something went wrong",
        null,
        500,
        response
      );
    }
  }

  public static async findByStore(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const store = await StoresSevices.findById(id);

      return Helper.responseJsonHandler("Successfully1", store, 200, response);
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

export default StoreControllers;
