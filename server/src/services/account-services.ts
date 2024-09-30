import accounts from "../models/accounts.model";
import { ICreate } from "../types/account.types";

class AccountSevices {
  static async create(body: any) {
    return await accounts.create(body);
  }

  static async findOne(email: string) {
    return await accounts.findOne({ email });
  }
}

export default AccountSevices;
