"use client";

import React, from "react";
import { Products } from "@/types/products.type";
import ImageDetailProductMobile from "./image-product-detail-mobile";
import { Separator } from "../ui/separator";
import { Heart, Star } from "lucide-react";
import PaymentProductMobile from "./payment-product-mobile";
import DescriptionProductMobile from "./description-product-mobile";

const ProductDetailMobile = ({
  data,
  isLoading,
}: {
  data: Products;
  isLoading: boolean;
}) => {
  return (
    <main className="block lg:hidden ">
      <section className=" max-w-lg mx-auto space-y-5">
        {/* image */}
        <ImageDetailProductMobile data={data} isLoading={isLoading} />

        {/* price */}
        <div className="px-5 flex items-center space-x-1">
          <h1 className="font-bold text-lg">{data?.currentPrice}</h1>
          <p className="text-sm line-through text-neutral-500">
            {data?.originalPrice}
          </p>
          <p className="font-bold text-red-500">{data?.discount}</p>
        </div>

        <Separator className="w-full " />

        {/* title */}
        <div className="px-5 flex justify-between space-x-2">
          <h1>{data?.name}</h1>

          <button className="size-8 text-neutral-600">
            <Heart />
          </button>
        </div>

        {/* rating */}
        <div className="px-5 flex space-x-4 items-center">
          <p className="text-sm">Terjual {data?.sold}+</p>
          <div className="flex items-center space-x-1">
            <Star className="size-5 text-yellow-500" />
            <p>{data?.rating}</p>
          </div>
        </div>

        {/* detail product */}
        <DescriptionProductMobile data={data} />

        {/* payment */}
      </section>
      <PaymentProductMobile data={data} />
    </main>
  );
};

export default ProductDetailMobile;
