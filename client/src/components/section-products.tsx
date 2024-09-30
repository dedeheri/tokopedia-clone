"use client";

import React from "react";
import CardProduct from "./card-product";
import CardProductSkeleton from "./skeleton/card-product-skeleton";
import BadgeFilterProduct from "./badge-filter-product";
import MaxWidth from "./max-width";
import { useFetchProductsQuery } from "@/redux/services/product.services";
import { Products } from "@/types/products.type";

const SectionProducts = () => {
  const { data: products, isLoading } = useFetchProductsQuery();

  return (
    <div className="space-y-5">
      <BadgeFilterProduct />
      <MaxWidth>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {isLoading
            ? [...Array(12)].map((_, i) => <CardProductSkeleton key={i} />)
            : products?.data?.map((product: Products, i: number) => (
                <CardProduct
                  key={i}
                  id={product?._id}
                  image={product?.image[0]}
                  title={product?.name}
                  currentPrice={product?.currentPrice}
                  originalPrice={product?.originalPrice}
                  discount={product?.discount}
                  storeName={product?.storeId?.name}
                  shipping={product?.shipping}
                  rating={product?.rating}
                  sold={product?.sold}
                  handleProduct={product?.handle}
                  handleStore={product?.storeId?.handle}
                />
              ))}
        </div>
      </MaxWidth>
    </div>
  );
};

export default SectionProducts;
