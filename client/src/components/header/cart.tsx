import React from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { CartItem, CartResult } from "@/types/carts.type";

const Cart = ({ data, loading }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const { status } = useSession();

  const handleCart = () => {
    if (status === "unauthenticated") {
      return router.push(
        `/login?callback=${process.env.NEXT_PUBLIC_URL}${pathname}`
      );
    }
  };

  console.log(data);

  return (
    <div className="relative group">
      <Link href={"/cart"}>
        <Button
          onClick={handleCart}
          className="px-2.5 group-hover:bg-neutral-100 relative"
          variant="ghost"
        >
          <ShoppingCartIcon className="text-neutral-700" />
          {data?.totalCount > 0 && (
            <span className="size-4 bg-red-500 rounded-full text-white font-bold text-xs flex justify-center items-center absolute top-0 right-0">
              {data?.totalCount}
            </span>
          )}
        </Button>
      </Link>

      <div className="h-0 w-[28rem] z-50 group-hover:translate-y-3 group-hover:h-[23rem] duration-300 top-9 right-0 rounded-xl absolute shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] bg-white">
        <div className="hidden group-hover:block">
          <div className="flex justify-between px-5 py-3 border-b">
            <h1 className="text-lg font-bold">
              Keranjang{" "}
              <span className="font-normal">({data?.totalCount})</span>
            </h1>
            <Link href={"/cart"}>
              <span className="text-md font-medium text-green-500">Lihat</span>
            </Link>
          </div>

          {loading && (
            <div className="p-5 space-y-5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between space-x-2 w-full">
                  <Skeleton className="!size-16" />
                  <div className="w-[13rem] space-y-3">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                  <div className="w-[6rem] flex space-x-1">
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {data?.length === 0 && (
            <div className="flex flex-col mt-10 items-center">
              <img
                src="https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png"
                className="w-36 h-36"
              />
              <h1 className="text-xl font-medium">
                Wah, keranjang belanjamu kosong
              </h1>
              <p className="text-md text-neutral-500">
                Yuk, isi dengan barang-barang impianmu!
              </p>
            </div>
          )}

          <div className="p-5 space-y-5 overflow-x-auto h-[18rem]">
            {data?.result?.map((cart: CartResult, i: number) =>
              cart?.cart?.map((product: CartItem) => (
                <div key={i} className="flex justify-between space-x-2 w-full">
                  <img src={product?.product?.image[0]} className="size-16" />
                  <div className="w-[13rem]">
                    <h1 className="truncate w-full">
                      {product?.product?.name}
                    </h1>
                    <p>{product?.product?.color[0]}</p>
                  </div>
                  <div className="font-bold text-sm flex space-x-1">
                    <p>{product?.totalProduct}</p>
                    <p>X</p>
                    <p>{product?.product?.currentPrice}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
