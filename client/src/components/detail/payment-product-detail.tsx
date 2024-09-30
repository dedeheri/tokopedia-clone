import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, LoaderCircle, MinusIcon, PlusIcon } from "lucide-react";
import { Products } from "@/types/products.type";
import { useCreateCartMutation } from "@/redux/services/cart.services";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { usePathname, useRouter } from "next/navigation";
import { useCreatePaymentMutation } from "@/redux/services/payment.services";

interface IPaymentProductDetailDekstop {
  data: Products;
  selectedColor: string | undefined;
  selectedStorage: string | undefined;
}

const PaymentProductDetailDekstop = ({
  data,
  selectedColor,
  selectedStorage,
}: IPaymentProductDetailDekstop) => {
  const { status } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const { data: session } = useSession();
  const [createCart, { isSuccess }] = useCreateCartMutation();
  const [
    createPayment,
    { isSuccess: isSuccessPayment, isLoading: isLoadingPayment },
  ] = useCreatePaymentMutation();

  const [total, setTotal] = useState<any>();
  const [currentPrice, setCurrentPrice] = useState<any>();
  const [increment, setIncrement] = useState<number>(1);

  useEffect(() => {
    const currentPrice = data?.currentPrice || "";
    setCurrentPrice(parseInt(currentPrice.replace(/[Rp.]/g, ""), 10));
  }, [data]);

  useEffect(() => {
    let result;

    if (increment === 1) {
      result = currentPrice;
    } else {
      result = currentPrice * increment;
    }

    setTotal(
      result?.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
  }, [currentPrice, increment]);

  const handleTotal = (props: string) => {
    props === "plus"
      ? setIncrement(increment + 1)
      : setIncrement(increment - 1);
  };

  useEffect(() => {
    isSuccess &&
      toast({
        className: "rounded-xl",

        title: "Berhasil",
        description: "Ditambahkan ke Keranjang",
      });
  }, [isSuccess]);

  const handleCart = (productId: string) => {
    status === "unauthenticated"
      ? router.push(`/login?callback=${process.env.NEXT_PUBLIC_URL}${pathName}`)
      : createCart({
          userId: session?.user?.id as string,
          productId: productId,
          total: increment,
          color: selectedColor,
          storage: selectedStorage,
        });
  };

  const handlePayment = () => {
    if (status === "unauthenticated") {
      return router.push(
        `/login?callback=${process.env.NEXT_PUBLIC_URL}${pathName}`
      );
    }

    createPayment({
      userId: session?.user?.id as string,
      productId: data?._id,
      specification: [selectedColor, selectedStorage],
    });

    router.push(`/payment`);
  };

  useEffect(() => {
    isSuccessPayment && router.push(`/payment`);
  }, [createPayment]);

  return (
    <aside className="sticky top-[10rem] w-[16.75rem] h-[19rem] border p-3 rounded-lg flex-col flex justify-between">
      <h1 className="font-bold text-sm">Atur jumlah dan catatan</h1>

      {/* type */}
      <p className="text-sm">
        {selectedColor}, {selectedStorage}
      </p>

      <Separator />

      {/* incerment */}
      <div className="space-y-4">
        <div className="border h-7 rounded-md w-24 flex items-center justify-between px-2">
          <Button
            onClick={() => handleTotal("minus")}
            variant="ghost"
            className="size-6 !p-0"
            disabled={increment == 1}
          >
            <MinusIcon className="size-4" />
          </Button>
          <input
            className="w-12 text-center h-full outline-none bg-transparent"
            value={increment}
          />

          <Button
            variant="ghost"
            className="size-6 !p-0"
            onClick={() => handleTotal("plus")}
          >
            <PlusIcon className="size-4" />
          </Button>
        </div>

        <div>
          <p className="text-neutral-500 line-through flex justify-end">
            {data?.originalPrice}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-neutral-600">Subtotal</p>

            <p className="font-bold text-lg">{total}</p>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="space-y-2">
        <Button
          onClick={() => handleCart(data?._id)}
          variant="secondary"
          className="w-full bg-green-600 hover:bg-green-700 space-x-1 rounded-lg h-10"
        >
          <PlusIcon className="size-4 text-white" />
          <p className="font-bold text-md text-white"> Keranjang</p>
        </Button>

        <Button
          onClick={() => handlePayment()}
          variant="outline"
          className="w-full space-x-1 rounded-lg h-10 border-green-500"
        >
          {isLoadingPayment ? (
            <LoaderCircle className="size-4 text-green-600 animate-spin duration-500" />
          ) : (
            <p className="font-bold text-md text-green-600">Beli Langsung</p>
          )}
        </Button>
      </div>

      {/* whilist */}
      <div className="flex justify-end">
        <div className="flex space-x-2 items-center cursor-pointer">
          <Heart className="size-3" />
          <h1 className="font-bold text-sm">Wishlist</h1>
        </div>
      </div>
    </aside>
  );
};

export default PaymentProductDetailDekstop;
