"use client";

import React, { useState } from "react";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Products } from "@/types/products.type";
import { Separator } from "../ui/separator";

interface IDescriptionProductDetailDekstop {
  data: Products;

  selectedColor: string | undefined;
  selectedStorage: string | undefined;

  setSelectedColor: (props: string) => void;
  setSelectedStorage: (props: string) => void;
}

const DescriptionProductDetailDekstop = ({
  data,
  selectedColor,
  selectedStorage,

  setSelectedColor,
  setSelectedStorage,
}: IDescriptionProductDetailDekstop) => {
  const [substring, setSubstring] = useState<boolean>(true);

  return (
    <section className="w-[29.25rem] grow h-auto space-y-8">
      {/* product name */}
      <div className="space-y-1">
        <h1 className="text-lg font-[800] leading-6">
          {data?.name} -{" "}
          <span>
            {selectedColor} , {selectedStorage}
          </span>
        </h1>

        <div className="flex space-x-2 items-center">
          <p className="text-sm">
            Terjual <span className="text-neutral-600">{data?.sold + "+"}</span>
          </p>

          <p className="text-neutral-600">•</p>

          <p className="text-sm flex space-x-1 items-center">
            <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
            <span className="text-neutral-600">{data?.rating}</span>
          </p>

          <p className="text-neutral-600">•</p>

          <p className="text-sm">
            Diskusi <span className="text-neutral-600">(0)</span>
          </p>
        </div>
      </div>

      {/* price */}
      <div className="space-y-2">
        <h1 className="font-[800] text-3xl">{data?.currentPrice}</h1>
        <div className="flex space-x-2">
          {data?.discount && (
            <p className="bg-red-100 text-red-500 w-7 h-5 text-[12px] rounded-sm font-bold flex items-center justify-center">
              {data?.discount}
            </p>
          )}

          {data?.originalPrice && (
            <p className="text-sm text-neutral-500 line-through">
              {data?.originalPrice}
            </p>
          )}
        </div>
      </div>

      <Separator />

      {/* color */}

      {data?.color?.length > 0 && (
        <div className="space-y-2">
          <div className="flex space-x-2">
            <h1 className="font-bold">Pilih warna :</h1>
            <p className="text-neutral-500 font-medium">
              {data?.color?.length}
            </p>
            <p className="text-neutral-500 font-medium">Warna</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {data?.color?.map((_: any, i: string) => (
              <div className="group">
                <Button
                  onClick={() => setSelectedColor(_)}
                  className={`rounded-xl  w-full border  ${
                    selectedColor == _
                      ? "border-green-500 bg-green-50 text-green-500  hover:bg-green-50"
                      : "bg-white hover:bg-white  group-hover:border-green-500"
                  }`}
                  variant="secondary"
                  key={i}
                >
                  <span className="group-hover:text-green-500"> {_}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* storage */}
      {data?.storage?.length > 0 && (
        <div className="space-y-2">
          <div className="flex space-x-2">
            <h1 className="font-bold">Pilih Storage :</h1>
            <p className="text-neutral-500 font-medium">
              {data?.storage?.length}
            </p>
            <p className="text-neutral-500 font-medium">Storage</p>
          </div>

          <div className="space-x-1 flex ">
            {data?.storage?.map((_: any, i: string) => (
              <div className="group">
                <Button
                  onClick={() => setSelectedStorage(_)}
                  className={`rounded-xl  w-full border  ${
                    selectedStorage == _
                      ? "border-green-500 bg-green-50 text-green-500  hover:bg-green-50"
                      : "bg-white hover:bg-white  group-hover:border-green-500"
                  }`}
                  variant="secondary"
                  key={i}
                >
                  <span className="group-hover:text-green-500">{_}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Separator />

      {/* tabs */}
      <Tabs defaultValue="detail" className="w-full">
        <TabsList className=" w-full bg-white border-b flex justify-start">
          <TabsTrigger value="detail" className="">
            Detail
          </TabsTrigger>
          <TabsTrigger value="specification">Spesifikasi</TabsTrigger>
          <TabsTrigger value="important">Info Penting</TabsTrigger>
        </TabsList>
        <TabsContent value="detail">
          <div className="mt-5 space-y-4">
            <div className="space-y-0.5">
              <p className="text-sm">
                <span className="text-neutral-500">Kondisi :</span> Baru
              </p>
              <p className="text-sm">
                <span className="text-neutral-500">Min. Pemesanan: </span>1 Buah
              </p>

              <p className="text-sm font-bold text-green-500">
                <span className="text-neutral-500 font-normal">Etalase: </span>
                {data?.categories}
              </p>
            </div>
            <div>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: substring
                    ? data?.description?.substring(0, 300) + "<p>...</p>"
                    : data?.description,
                }}
              />

              <button
                onClick={() => setSubstring(!substring)}
                className="text-sm  font-bold text-green-600"
              >
                <span>
                  {substring ? "Lihat Selengkapnya" : "Lihat Lebih Sedikit"}
                </span>
              </button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <Separator />

      {/* store */}
      <div className="flex justify-between">
        <Link href={`/${data?.storeId?.handle}`} className="flex space-x-3">
          <img
            src={data?.storeId?.image}
            className="size-[48px] rounded-full"
            alt={data?.storeId?.name}
          />

          <div>
            <h1 className="font-bold">{data?.storeId?.name}</h1>
          </div>
        </Link>

        <Button variant="ghost" className="border border-green-600 h-8 w-28">
          <span className="text-green-500 text-sm font-bold">Follow</span>
        </Button>
      </div>
    </section>
  );
};

export default DescriptionProductDetailDekstop;
