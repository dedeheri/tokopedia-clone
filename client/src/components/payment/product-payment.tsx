import { IPayment } from "@/types/payment.type";
import { Products } from "@/types/products.type";
import { Minus, MinusIcon, Plus, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface IProductPayment {
  product: IPayment | undefined;
  isLoading: boolean;
  totalProduct: number;
  setTotalProduct: (props: number) => void;
}
const ProductPayment = ({
  product,
  isLoading,
  totalProduct,
  setTotalProduct,
}: IProductPayment) => {
  return (
    <section className="w-[685px]">
      <article className="space-y-5">
        <h1 className="text-xl font-bold">Barang yang dibeli</h1>

        <div className="space-y-1">
          {/* store name */}
          <h1 className="font-bold">
            {product?.data?.productId?.storeId?.name}
          </h1>
          <p className="text-sm text-neutral-600">
            {product?.data?.productId?.shipping}
          </p>

          <div className="flex space-x-6">
            <img
              src={product?.data?.productId?.image[0]}
              className="size-[70px] rounded-md"
            />

            <div className="space-y-2">
              <p className="leading-5">{product?.data?.productId?.name}</p>

              {product?.data?.specification?.length > 0 && (
                <div className="flex space-x-2">
                  <p className="text-neutral-600 text-sm">
                    {product?.data?.specification[0]}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {product?.data?.specification[1]}
                  </p>
                </div>
              )}

              <div className="flex items-center space-x-3">
                {product?.data?.productId?.discount && (
                  <p className="font-bold text-xs bg-[#FF7182] px-3 py-0.5 rounded-md text-white">
                    {product?.data?.productId?.discount}
                  </p>
                )}

                {product?.data?.productId?.originalPrice && (
                  <p className="text-md text-neutral-600 line-through">
                    {product?.data?.productId?.originalPrice}
                  </p>
                )}

                <p className="text-md font-bold">
                  {product?.data?.productId?.currentPrice}
                </p>
              </div>

              <div className="flex space-x-2">
                <button className="font-bold text-xs text-green-600">
                  Tulis Catatan
                </button>

                <div className="border h-7 rounded-md w-24 flex items-center justify-between px-2">
                  <Button
                    onClick={() => setTotalProduct(totalProduct - 1)}
                    variant="ghost"
                    className="size-6 !p-0"
                    disabled={totalProduct == 1}
                  >
                    <MinusIcon className="size-4" />
                  </Button>
                  <input
                    className="w-12 text-center h-full outline-none bg-transparent"
                    value={totalProduct}
                  />

                  <Button
                    variant="ghost"
                    className="size-6 !p-0"
                    onClick={() => setTotalProduct(totalProduct + 1)}
                  >
                    <PlusIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductPayment;
