import users from "../models/users.models";
import { ICreateUser } from "../types/users.types";

class UserSevices {
  static async create(body: ICreateUser) {
    return await users.create(body);
  }

  static async findById(_id: string) {
    return await users.findById(_id);
  }

  static async findOne(props: any) {
    return await users.findOne(props);
  }
}

export default UserSevices;
