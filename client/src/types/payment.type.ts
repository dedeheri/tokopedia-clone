import { Products } from "./products.type";

export interface IPayment {
  message?: string;
  data: Payment;
}

export interface Payment {
  _id: string;
  userId: string;
  productId: Products;
  createdAt: string;
  specification?: [] | any;
}

// export interface ICreateCart {
//   userId: string;
//   productId: string;
//   total: number;
//   color: string;
//   storage: string;
// }
