"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTopUpSkeleton from "./skeleton/section-top-skeleton";
import { Skeleton } from "./ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const badges = [
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png",
    label: "Kategori",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/4b81a081-0f97-4b9d-9ee1-8be5c938b14d.png",
    label: "Handphone & Tablet",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png",
    label: "Top-Up & Tagihan",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/ad58b90c-d307-40b8-9f39-0146c67b4cdc.png",
    label: "Elektronik",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png",
    label: "Travel & Entertainment",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png",
    label: "Perawatan Hewan",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/8b1b8635-8822-4007-90c3-403aa53cd207.png",
    label: "Keuangan",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png",
    label: "Komputer & Laptop",
  },
];

const SectionTopUpAndCategories = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollButton, setScrollButton] = useState<boolean>(false);

  const onScroll = (scrollOffset: number) => {
    (ref as any).current.scrollLeft += scrollOffset;
    scrollOffset > 0 ? setScrollButton(true) : setScrollButton(false);
  };

  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);

  return (
    <section>
      <article className="hidden lg:block p-4 w-full h-[296px]  bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-2xl">
        {loading ? (
          <SectionTopUpSkeleton />
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="flex w-full space-x-3">
              <div className=" w-full space-y-5">
                <h1 className="text-3xl font-bold">Kategori Populer</h1>
                <img
                  className="rounded-lg w-full"
                  src="https://images.tokopedia.net/home/banner-placeholder-widget.jpg?ect=4g"
                />
              </div>

              <div className="w-full ">
                <h1 className="text-xl font-bold">Top Up & Tagihan</h1>
                <Tabs
                  defaultValue="pulsa"
                  className="w-full h-[148px] border  rounded-lg py-3 mt-7"
                >
                  <TabsList className=" w-full bg-white border-b flex justify-start">
                    <TabsTrigger value="pulsa">Pulsa</TabsTrigger>
                    <TabsTrigger value="data">Paket Data</TabsTrigger>
                    <TabsTrigger value="flight">Flight</TabsTrigger>
                    <TabsTrigger value="pln">Listrik PLN</TabsTrigger>
                  </TabsList>
                  <TabsContent value="pulsa">
                    <div className="p-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nomer Telepon
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"0123456789"}
                        />
                      </div>

                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nominal
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"20.000"}
                        />
                      </div>

                      <Button
                        variant="secondary"
                        className=" h-10 w-24 rounded-lg mt-4"
                      >
                        <span className="text-sm font-bold">Beli</span>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="data">
                    <div className="p-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nomer Telepon
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"0123456789"}
                        />
                      </div>

                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nominal
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"20.000"}
                        />
                      </div>

                      <Button
                        variant="secondary"
                        className=" h-10 w-24 rounded-lg mt-4"
                      >
                        <span className="text-sm font-bold">Beli</span>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="flight">
                    <div className="p-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nomer Telepon
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"0123456789"}
                        />
                      </div>

                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nominal
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"20.000"}
                        />
                      </div>

                      <Button
                        variant="secondary"
                        className=" h-10 w-24 rounded-lg mt-4"
                      >
                        <span className="text-sm font-bold">Beli</span>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="pln">
                    <div className="p-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nomer Telepon
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"0123456789"}
                        />
                      </div>

                      <div className="space-y-1">
                        <h1 className="font-bold text-neutral-600 text-sm">
                          Nominal
                        </h1>
                        <input
                          className="outline-none border rounded-lg h-10 px-3"
                          defaultValue={"20.000"}
                        />
                      </div>

                      <Button
                        variant="secondary"
                        className=" h-10 w-24 rounded-lg mt-4"
                      >
                        <span className="text-sm font-bold">Beli</span>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="flex  group relative ">
              {scrollButton && (
                <button
                  onClick={() => onScroll(-300)}
                  className="bg-white rounded-full size-10 flex items-center justify-center translate-x-0 absolute group-hover:-translate-x-3 duration-500 shadow-xl border left-0 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="size-6 text-neutral-600" />
                </button>
              )}

              <div
                className="flex space-x-3 overflow-hidden scroll-smooth"
                ref={ref}
              >
                {badges.map((badge, i) => (
                  <Button
                    variant="outline"
                    className="rounded-2xl h-10 space-x-3 px-6"
                    key={i}
                  >
                    <img src={badge.image} className="size-[24px]" />
                    <span>{badge.label}</span>
                  </Button>
                ))}
              </div>

              {!scrollButton && (
                <button
                  onClick={() => onScroll(300)}
                  className="bg-white rounded-full size-10 flex items-center justify-center -translate-x-0 absolute group-hover:translate-x-3 duration-500 shadow-xl border right-0 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="size-6 text-neutral-600" />
                </button>
              )}
            </div>
          </div>
        )}
      </article>

      <article className="flex w-full space-x-6 lg:hidden">
        {loading ? (
          [...Array(6)]?.map((_, i) => (
            <div key={i} className="space-y-4 w-full">
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="w-12 h-4 rounded-full" />
            </div>
          ))
        ) : (
          <figure className="flex group overflow-hidden">
            {scrollButton && (
              <button
                onClick={() => onScroll(-300)}
                className="bg-white rounded-full size-10 flex items-center justify-center translate-x-0 absolute group-hover:-translate-x-3 duration-500 shadow-xl border left-0 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="size-6 text-neutral-600" />
              </button>
            )}

            <div className="flex scroll-smooth overflow-hidden">
              {badges?.map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-3 w-full"
                >
                  <div className="bg-neutral-100 size-12 rounded-full p-2">
                    <img src={badge.image} className="size-full" />
                  </div>

                  <p className="text-center text-sm leading-4">{badge.label}</p>
                </div>
              ))}
            </div>

            {!scrollButton && (
              <button
                onClick={() => onScroll(300)}
                className="bg-white rounded-full size-10 flex items-center justify-center -translate-x-0 absolute group-hover:translate-x-3 duration-500 shadow-xl border right-0 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="size-6 text-neutral-600" />
              </button>
            )}
          </figure>
        )}
      </article>
    </section>
  );
};

export default SectionTopUpAndCategories;
