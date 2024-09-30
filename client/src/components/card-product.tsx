import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface ICardProduct {
  id: string;
  image: string;
  handleProduct: string;
  handleStore: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  storeName: string;
  shipping: string;
  rating: number;
  sold: number;
}

const CardProduct = ({
  id,
  image,
  handleProduct,
  handleStore,
  title,
  currentPrice,
  originalPrice,
  discount,
  rating,
  sold,
  storeName,
  shipping,
}: ICardProduct) => {
  return (
    <Link href={`/${handleStore}/${handleProduct}`}>
      <div className="h-[340px] w-full lg:w-[195px] group shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-xl">
        <div className="space-y-2">
          <img
            src={image}
            alt={title}
            className="h-[188px] w-full rounded-t-xl"
          />
          <div className="px-2 space-y-1">
            <p className="text-sm line-clamp-2">{title}</p>
            <p className="font-bold">{currentPrice}</p>
            <div className="flex space-x-1">
              <p className="text-xs text-neutral-400 line-through">
                {originalPrice}
              </p>
              <p className="text-xs text-red-500 font-bold">{discount}</p>
            </div>

            <div className="flex space-x-1 items-center h-6">
              <img
                src="https://images.tokopedia.net/ta/icon/badge/OS-Badge-80.png"
                alt="badge"
                className="size-[16px]"
              />

              <div className="text-xs  group-hover:translate-y-0 translate-y-3 ease-in-out duration-300 transition-transform transform h ">
                <span className="text-neutral-500 hidden group-hover:block  left-0">
                  {shipping}
                </span>
              </div>

              <div className="text-xs  translate-y-0 group-hover:-translate-y-3 ease-in-out duration-300 transition-transform transform h">
                <span className="text-neutral-500 group-hover:hidden block -top-2 left-0">
                  {storeName}
                </span>
              </div>
              {/* <p className="text-xs text-neutral-500">{storeName}</p> */}
            </div>
            <div className="flex space-x-1 items-center">
              <img
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                alt="badge"
                className="size-[16px]"
              />
              <p className="text-xs text-neutral-500">{rating}</p>

              <Separator orientation="vertical" className=" h-3" />
              <p className="text-xs text-neutral-500">{sold + "+ terjual"} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
