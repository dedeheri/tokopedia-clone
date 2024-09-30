import store from "../models/store.models";

class StoresSevices {
  static async create(body: any) {
    return await store.create(body);
  }

  static async findById(_id: string) {
    return await store.findById(_id);
  }

  static async find(props?: any) {
    return await store.find(props);
  }
}

export default StoresSevices;
