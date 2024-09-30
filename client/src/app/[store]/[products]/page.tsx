"use client";

import Layout from "@/components/layout";

import ProductDetailDekstop from "@/components/detail/product-detail-dekstop";
import { useFetchDetailProductsQuery } from "@/redux/services/product.services";
import ProductDetailMobile from "@/components/detail/product-detail-mobile";

const page = (params: { params: { products: string } }) => {
  const { data: products, isLoading } = useFetchDetailProductsQuery(
    params.params.products
  );

  return (
    <Layout>
      <ProductDetailDekstop
        data={products?.data as any}
        isLoading={isLoading}
      />

      <ProductDetailMobile data={products?.data as any} isLoading={isLoading} />
    </Layout>
  );
};

export default page;
