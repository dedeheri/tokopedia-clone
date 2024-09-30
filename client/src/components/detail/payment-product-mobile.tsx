import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

import { Products } from "@/types/products.type";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useCreatePaymentMutation } from "@/redux/services/payment.services";
import { useCreateCartMutation } from "@/redux/services/cart.services";
import { toast } from "@/hooks/use-toast";

const PaymentProductMobile = ({ data }: { data: Products }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [color, setColor] = useState<string>();
  const [storage, setStorage] = useState<string>();

  const [
    createPayment,
    { isSuccess: isSuccessPayment, isLoading: isLoadingPayment },
  ] = useCreatePaymentMutation();

  const [createCart, { isSuccess: isSuccessCart }] = useCreateCartMutation();

  useEffect(() => {
    setColor(data?.color?.[0]);
    setStorage(data?.storage?.[0]);
  }, [data]);

  const handlePayment = () => {
    if (status === "unauthenticated") {
      return router.push(
        `/login?callback=${process.env.NEXT_PUBLIC_URL}${pathName}`
      );
    }

    createPayment({
      userId: session?.user?.id as string,
      productId: data?._id,
      specification: [color, storage],
    });

    router.push(`/payment`);
  };
  const handleCart = (productId: string) => {
    status === "unauthenticated"
      ? router.push(`/login?callback=${process.env.NEXT_PUBLIC_URL}${pathName}`)
      : createCart({
          userId: session?.user?.id as string,
          productId: productId,
          color: color,
          storage: storage,
        });
  };

  useEffect(() => {
    isSuccessCart &&
      toast({
        className: "rounded-xl",

        title: "Berhasil",
        description: "Ditambahkan ke Keranjang",
      });
  }, [isSuccessCart]);

  return (
    <section className="h-14 w-full shadow-[0px_-1px_6px_rgba(141,150,170,0.4)] flex items-center fixed bg-white bottom-0 px-5 ">
      <Drawer>
        <DrawerTrigger className="w-full">
          <div className="flex space-x-3">
            <div className="border flex items-center justify-center rounded-lg border-green-500 text-green-600 hover:text-green-600 font-bold w-full h-10">
              Beli
            </div>
            <div className="font-bold w-full bg-green-600 hover:bg-green-700 space-x-1 h-10 flex items-center justify-center rounded-lg ">
              <PlusIcon className="size-4 text-white" />
              <span className="text-white">Keranjang</span>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="space-y-4">
            <p className="font-bold text-lg px-3">Varian produk</p>

            <div className="space-y-4  px-3">
              {/* image */}
              <div className="flex space-x-5 items-center">
                <img
                  src={data?.image?.[0]}
                  className="size-[144px] rounded-md"
                />

                <div className="space-y-3">
                  {/* variant */}
                  <div className="flex space-x-3">
                    <p className="bg-gray-200 text-gray-500 text-sm px-3 font-bold h-5 rounded-md">
                      {color}
                    </p>
                    {data?.storage?.length > 0 && (
                      <p className="bg-gray-200 text-gray-500 text-sm px-3 font-bold h-5 rounded-md">
                        {storage}
                      </p>
                    )}
                  </div>
                  {/* price */}
                  <p className="font-bold bg-red-50 w-[8rem] px-4 border border-red-300 text-red-500 rounded-lg">
                    {data?.currentPrice}
                  </p>
                  <div className="flex space-x-2 items-center">
                    <p className="font-bold bg-red-50 px-1 text-sm border border-red-300 text-red-500 rounded-lg">
                      {data?.discount}
                    </p>
                    <p className="line-through text-sm">
                      {data?.originalPrice}
                    </p>
                  </div>
                </div>
              </div>
              {/* color */}
              {data?.color?.length > 0 && (
                <div className="space-y-3">
                  <p className="font-bold">Warna</p>
                  <div className="grid grid-cols-4  gap-3">
                    {data?.color?.map((_: string, i: number) => (
                      <Button
                        onClick={() => setColor(_)}
                        variant="ghost"
                        className={` h-10 px-4 rounded-xl ${
                          color === _
                            ? "border border-green-600 text-green-600 bg-green-50"
                            : "border"
                        }`}
                      >
                        {_}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* storage */}
              {data?.storage?.length > 0 && (
                <div className="space-y-3">
                  <p className="font-bold">Penyimpanan</p>
                  <div className="grid grid-cols-4  gap-3">
                    {data?.storage?.map((_: string, i: number) => (
                      <Button
                        onClick={() => setStorage(_)}
                        variant="ghost"
                        className={` h-10 px-4 rounded-xl ${
                          storage === _
                            ? "border border-green-600 text-green-600 bg-green-50"
                            : "border"
                        }`}
                      >
                        {_}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center shadow-[0px_-1px_6px_rgba(141,150,170,0.4)] h-14 space-x-3 px-4">
              <Button
                onClick={() => handlePayment()}
                variant="ghost"
                className="border border-green-500 text-green-600 hover:text-green-600 font-bold w-full h-10"
              >
                Beli
              </Button>
              <Button
                onClick={() => handleCart(data?._id)}
                variant="ghost"
                className="font-bold w-full bg-green-600 hover:bg-green-700 space-x-1 h-10"
              >
                <PlusIcon className="size-4 text-white" />
                <span className="text-white">Keranjang</span>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default PaymentProductMobile;
