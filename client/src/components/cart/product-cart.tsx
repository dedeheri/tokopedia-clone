import { ICart } from "@/types/carts.type";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "../ui/separator";

function ProductCart({ cart }: { cart: ICart }) {
  return (
    <div className="space-y-3">
      {cart?.data?.result?.map((data: any, i: number) => (
        <div key={i} className="bg-white p-3 rounded-lg space-y-5">
          <div className="flex space-x-4 items-center">
            <Checkbox />
            <h1 className="font-bold text-md">{data?.store?.name}</h1>
          </div>
          {data?.cart?.map((product: any) => (
            <div className="flex space-x-14">
              <div className="flex space-x-4 size-[100px]">
                <Checkbox />
                <img
                  src={product?.product?.image?.[0]}
                  className="size-[80px]"
                />
              </div>

              <div className="space-y-3 w-full">
                <p>{product?.product?.name}</p>
                <div className="text-sm text-neutral-500 space-x-1 flex">
                  <p>{product?.color}</p>
                  <p>,</p>
                  <p>{product?.storage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductCart;
