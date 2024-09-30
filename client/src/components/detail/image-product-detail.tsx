"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const ImageDetailProductDesktop = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const previous = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? data?.image?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastSlide = currentIndex === data?.image.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full lg:w-[21.75rem] lg:h-[26rem] lg:sticky lg:top-[10rem]">
      <div className="space-y-2 flex flex-col justify-between h-full">
        <Dialog>
          <DialogTrigger>
            <img
              src={data?.image?.[currentIndex]}
              className="!w-full h-full lg:size-[348px] rounded-lg"
              alt="thubmnails"
            />
          </DialogTrigger>
          <DialogContent className="lg:max-w-[1048px] lg:max-h-[545px] p-7">
            <DialogHeader className="space-y-6">
              <h1 className="text-xl font-bold leading-6">{data?.name}</h1>
              <div className="flex justify-between">
                <div className="w-[740px] h-full flex justify-between items-center">
                  <Button
                    disabled={currentIndex === 0}
                    onClick={previous}
                    variant="ghost"
                    className="bg-white h-14 w-14 p-0 rounded-full shadow-xl"
                  >
                    <ChevronLeft className="size-8 text-neutral-600" />
                  </Button>
                  <img
                    src={data?.image?.[currentIndex]}
                    alt={data?.image?.[currentIndex]}
                    className="size-[410px]"
                  />

                  <Button
                    disabled={currentIndex === data?.image?.length - 1}
                    onClick={next}
                    variant="ghost"
                    className="bg-white h-14 w-14 p-0 rounded-full shadow-xl"
                  >
                    <ChevronRight className="size-8 text-neutral-600" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <h2 className="font-bold">Gambar Barang</h2>

                  <div className="grid grid-cols-3 gap-2">
                    {(data as any)?.image?.map((_: string, i: number) => (
                      <img
                        src={_}
                        key={i}
                        className={`size-[60px] rounded-lg cursor-pointer ${
                          currentIndex === i
                            ? " border-2 border-green-600"
                            : " border-2 border-transparent"
                        } `}
                        onClick={() => setCurrentIndex(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="flex space-x-2 overflow-x-hidden">
          {(data as any)?.image?.map((_: string, i: number) => (
            <img
              src={_}
              key={i}
              className={`size-[60px] rounded-lg cursor-pointer ${
                currentIndex === i
                  ? " border-2 border-green-600"
                  : " border-2 border-transparent"
              } `}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetailProductDesktop;
