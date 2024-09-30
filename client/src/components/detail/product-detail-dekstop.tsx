"use client";

import React, { useEffect, useState } from "react";

import { Products } from "@/types/products.type";
import MaxWidth from "../max-width";

import DescriptionProductDetailDekstop from "./description-product-detail";
import PaymentProductDetailDekstop from "./payment-product-detail";
import CommentProductDetail from "./comment-product.detail";
import ImageDetailProductDesktop from "./image-product-detail";
import ProductStore from "./product-store";
import ProductDetailSkeleton from "../skeleton/product-detail-skeleton";

const ProductDetailDekstop = ({
  data,
  isLoading,
}: {
  data: Products;
  isLoading: boolean;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedStorage, setSelectedStorage] = useState<string>();

  useEffect(() => {
    data?.color?.length > 0 && setSelectedColor(data?.color?.[0]);
    data?.storage?.length > 0 && setSelectedStorage(data?.storage?.[0]);
  }, [data]);

  return (
    <main className="hidden lg:block relative">
      <MaxWidth>
        <section className="space-y-20">
          {isLoading ? (
            <ProductDetailSkeleton />
          ) : (
            <div className="lg:flex lg:space-x-10">
              <div className="space-y-20">
                <section className="space-y-10 lg:space-y-0 lg:flex lg:space-x-10">
                  {/* image */}
                  <ImageDetailProductDesktop data={data} />
                  {/* product detail */}
                  <DescriptionProductDetailDekstop
                    data={data}
                    selectedColor={selectedColor}
                    selectedStorage={selectedStorage}
                    setSelectedColor={setSelectedColor}
                    setSelectedStorage={setSelectedStorage}
                  />
                </section>
                {/* comment */}
                <CommentProductDetail />
              </div>
              {/* cart */}
              <PaymentProductDetailDekstop
                data={data}
                selectedColor={selectedColor}
                selectedStorage={selectedStorage}
              />
            </div>
          )}

          {/* store */}
          <ProductStore storeId={data?.storeId?._id} />
        </section>
      </MaxWidth>
    </main>
  );
};

export default ProductDetailDekstop;
