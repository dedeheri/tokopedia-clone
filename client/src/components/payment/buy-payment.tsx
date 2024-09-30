import React, { useEffect, useState } from "react";
import VoucherPayment from "./voucer-payment";
import { IPayment } from "@/types/payment.type";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface IProductPayment {
  product: IPayment | undefined;
  totalProduct: number;
  courierPrice: string | undefined;
}

const BuyPayment = ({
  product,
  totalProduct,
  courierPrice,
}: IProductPayment) => {
  const [loadingPayment, setLoadingPayment] = useState<boolean>(true);

  const parsePayment = (() => {
    const cleanedString = (currencyString: string) => {
      const cleanedString = currencyString.replace("Rp", "").replace(/\./g, "");
      const parseCurrentPrice = parseInt(cleanedString, 10);

      return parseCurrentPrice;
    };

    const parseCurrentPrice = cleanedString(
      product?.data?.productId?.currentPrice || ""
    );
    const parseCourierPrice = cleanedString(courierPrice || "");

    const reducePayment = [
      parseCurrentPrice * totalProduct,
      parseCourierPrice,
      42200,
    ].reduce((acc, curr) => acc + curr, 0);

    return new Intl.NumberFormat("id-Id", {
      style: "currency",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      currency: "IDR",
    }).format(reducePayment);
  })();

  useEffect(() => {
    setInterval(() => setLoadingPayment(false), 1000);

    return () => setLoadingPayment(true);
  }, [totalProduct, courierPrice]);

  return (
    <aside className="w-full lg:w-[350px] h-[450px] bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-lg">
      <div>
        {/* voucer */}
        <VoucherPayment />

        <div className="bg-gray-100 h-3 w-full" />

        <div className="p-5 space-y-4">
          <h1 className="font-bold text-lg">Ringkasan Belanja</h1>

          <div className="space-y-2">
            <h2 className="font-bold text-md">Total Belanja</h2>

            <div className="flex justify-between">
              <p className="text-md text-neutral-600">
                Total Harga ({totalProduct} Barang)
              </p>
              <p className="text-md text-neutral-600">
                {product?.data?.productId?.currentPrice}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-md text-neutral-600">Total Ongkos Kirim</p>
              <p className="text-md text-neutral-600">{courierPrice}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-md text-neutral-600">Asuransi Pengiriman</p>
              <p className="text-md text-neutral-600">Rp42.200</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-y px-5 py-3">
          <p className="font-bold text-lg">Total Tagihan</p>

          {loadingPayment ? (
            <Skeleton className="w-1/3 h-5" />
          ) : (
            <p className="font-bold text-lg">{parsePayment}</p>
          )}
        </div>

        <div className="p-5">
          <Button className="font-bold h-11 w-full text-lg bg-green-600 hover:bg-green-700">
            Bayar
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default BuyPayment;
