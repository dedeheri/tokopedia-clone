import { useFetchProductByStoreQuery } from "@/redux/services/product.services";
import React from "react";
import CardProductSkeleton from "../skeleton/card-product-skeleton";
import { Products } from "@/types/products.type";
import CardProduct from "../card-product";

const ProductStore = ({ storeId }: { storeId: string }) => {
  const { data: product, isLoading } = useFetchProductByStoreQuery(storeId);

  return (
    <section className="space-y-7">
      <h1 className="font-bold text-2xl">Lainnya di toko ini</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {isLoading
          ? [...Array(12)].map((_, i) => <CardProductSkeleton key={i} />)
          : product?.data?.map((product: Products, i: number) => (
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
    </section>
  );
};

export default ProductStore;
