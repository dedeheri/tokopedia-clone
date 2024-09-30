import products from "../models/products.model";

class ProductSevices {
  static async find(props?: any) {
    return await products.find(props).populate("storeId");
  }

  static async findOne(props?: any) {
    return await products.findOne(props).populate("storeId");
  }

  static async create(body: any) {
    return await products.create(body);
  }

  static async findById(props: any) {
    return await products.find(props).populate("storeId");
  }
}

export default ProductSevices;
