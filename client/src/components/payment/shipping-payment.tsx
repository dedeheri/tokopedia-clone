import React from "react";
import CourierPayment from "./courier.payment";
import { Separator } from "../ui/separator";
import MethodPayment from "./method-payment";

const ShippingPayment = ({
  setCourierPrice,
}: {
  setCourierPrice: (price: string) => void;
}) => {
  return (
    <section className="space-y-5">
      <h1 className="font-bold text-lg">Pengiriman dan pembayaran</h1>
      <div className="rounded-lg bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.12)]">
        <div className="p-5">
          <div className="flex space-x-2 items-center">
            <p className="font-bold text-xs h-6 flex items-center bg-gray-300 text-white px-2 rounded-md">
              Utama
            </p>

            <p>
              Rumah - <span></span>
            </p>
          </div>
        </div>

        <Separator className="border-b" />
        <CourierPayment setCourierPrice={setCourierPrice} />
        <Separator className="border-b" />
        <MethodPayment />
      </div>
    </section>
  );
};

export default ShippingPayment;
