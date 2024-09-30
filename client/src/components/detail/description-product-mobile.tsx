import { Products } from "@/types/products.type";
import React, { useState } from "react";
import { Separator } from "../ui/separator";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const DescriptionProductMobile = ({ data }: { data: Products }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 space-y-3">
      <h1 className="font-bold">Detail Produk</h1>

      <div className="space-y-1">
        <div className="flex space-x-3">
          <div className="w-[190px]">
            <p className="text-md text-gray-500">Tahun Rilis</p>
          </div>

          <div className="flex-grow">
            <p className="text-md">{data?.releaseYear}</p>
          </div>
        </div>
        <Separator />
        <div className="flex space-x-3">
          <div className="w-[190px]">
            <p className="text-md text-gray-500">Kondisi</p>
          </div>

          <div className="flex-grow">
            <p className="text-md">{data?.condition}</p>
          </div>
        </div>
        <Separator />
        <div className="flex space-x-3">
          <div className="w-[190px]">
            <p className="text-md text-gray-500">Etalase</p>
          </div>

          <div className="flex-grow">
            <p className="text-md">{data?.categories}</p>
          </div>
        </div>
      </div>

      {/* description */}
      <h1 className="font-bold">Deskripsi produk</h1>
      <div>
        <p
          className="leading-6 text-sm"
          dangerouslySetInnerHTML={{
            __html: data?.description?.substring(0, 150) + "...",
          }}
        />

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="font-bold text-sm text-green-600">
              Baca Selengkapnya
            </button>
          </DialogTrigger>
          <DialogContent className="h-full mt-10 rounded-t-2xl min-w-full px-3 py-2 [&>button]:hidden">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 ">
                <Button
                  onClick={() => setOpen(false)}
                  variant="ghost"
                  className="p-0 px-1"
                >
                  <X className="size-6 text-neutral-700" />
                </Button>

                <p className="font-bold text-lg">Detail produk</p>
              </div>

              <div className="space-y-4 overflow-y-scroll h-[50rem]">
                <div className="flex space-x-4 ">
                  <img src={data?.image?.[0]} className="size-[54px]" />
                  <p className="line-clamp-2 font-bold ">{data?.name}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex space-x-3">
                    <div className="w-[190px]">
                      <p className="text-md text-gray-500">Tahun Rilis</p>
                    </div>

                    <div className="flex-grow">
                      <p className="text-md">{data?.releaseYear}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex space-x-3">
                    <div className="w-[190px]">
                      <p className="text-md text-gray-500">Kondisi</p>
                    </div>

                    <div className="flex-grow">
                      <p className="text-md">{data?.condition}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex space-x-3">
                    <div className="w-[190px]">
                      <p className="text-md text-gray-500">Etalase</p>
                    </div>

                    <div className="flex-grow">
                      <p className="text-md">{data?.categories}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h1 className="font-bold text-lg">Deskripsi produk</h1>

                  <p
                    className="leading-6 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DescriptionProductMobile;
