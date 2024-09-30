import { ICart } from "@/types/carts.type";
import React from "react";
import ProductCart from "./product-cart";

const CartDesktop = ({ cart }: { cart: ICart }) => {
  return (
    <div>
      <section className="w-[800px] space-y-6">
        <h1 className="font-bold text-3xl">Keranjang</h1>

        <ProductCart cart={cart} />
      </section>
    </div>
  );
};

export default CartDesktop;
