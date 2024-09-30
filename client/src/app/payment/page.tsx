"use client";

import React, { useState } from "react";

import Layout from "@/components/layout";
import MaxWidth from "@/components/max-width";
import BuyPayment from "@/components/payment/buy-payment";
import ProductPayment from "@/components/payment/product-payment";
import { useSearchParams } from "next/navigation";
import { useFetchDetailProductsQuery } from "@/redux/services/product.services";
import { Products } from "@/types/products.type";
import { useSession } from "next-auth/react";
import { useFetchPaymentQuery } from "@/redux/services/payment.services";
import { IPayment } from "@/types/payment.type";
import ShippingPayment from "@/components/payment/shipping-payment";

const Page = () => {
  const { data: session } = useSession();

  const {
    data: product,
    error,
    isError,
    isLoading,
  } = useFetchPaymentQuery(session?.user?.id as string);

  const [totalProduct, setTotalProduct] = useState<number>(1);
  const [courierPrice, setCourierPrice] = useState<string>();

  return (
    <Layout>
      <MaxWidth>
        {isError && (
          <div className="flex flex-col items-center space-y-3">
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/d6ef28c8.jpg"
              className="w-[300px] h-[222px]"
            />

            <h1 className="font-bold text-xl">Oops, ada kendala</h1>
            <p>
              Terjadi kesalahan. Silahkan coba tambahkan belanjaanmu lagi, ya!
            </p>
          </div>
        )}

        {!isError && (
          <div className="lg:flex lg:space-x-10 space-y-10 lg:space-y-0 lg:justify-center">
            <div className="space-y-10">
              <ProductPayment
                product={product as IPayment}
                isLoading={isLoading}
                totalProduct={totalProduct}
                setTotalProduct={setTotalProduct}
              />

              <ShippingPayment setCourierPrice={setCourierPrice} />
            </div>
            <BuyPayment
              product={product as IPayment}
              totalProduct={totalProduct}
              courierPrice={courierPrice}
            />
          </div>
        )}
      </MaxWidth>
    </Layout>
  );
};

export default Page;
