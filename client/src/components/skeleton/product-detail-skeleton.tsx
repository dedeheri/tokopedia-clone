import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import MaxWidth from "../max-width";

const ProductDetailSkeleton = () => {
  return (
    <MaxWidth>
      <div className="flex space-x-10 justify-between">
        {/* image */}
        <div className="w-[21.75rem] h-[26rem] sticky top-[10rem]">
          <div className="space-y-2">
            <Skeleton className="size-[348px] rounded-lg" />

            <div className="flex space-x-2 overflow-x-hidden">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className={`size-[60px] rounded-lg cursor-pointer  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="w-[29.25rem] grow h-auto space-y-8">
          <div className="space-y-1">
            <Skeleton className="w-full h-7" />
            <div className="flex space-x-2 items-center">
              <Skeleton className="w-full h-5" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton className="w-1/3 h-5" />
          </div>

          <Separator />

          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-full rounded-lg h-10" />
            ))}
          </div>
          <Separator />

          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-full rounded-lg h-10" />
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <Skeleton className="w-1/2 h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>

          <Separator />

          <div>
            <div className="flex space-x-2 items-center w-full">
              <Skeleton className="size-12 rounded-full" />
              <div className="w-80 space-y-1">
                <Skeleton className="w-1/2 h-4" />
                <Skeleton className="w-1/3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* cart */}
        <div className="sticky flex flex-col justify-between top-[10rem] w-[16.75rem] h-[19rem] rounded-xl border  max-h-[353px] p-4  space-y-4">
          <div className=" space-y-4">
            <Skeleton className="size-10 w-full rounded-lg" />
            <Skeleton className="size-5 w-full rounded-lg" />
            <Skeleton className="size-5 w-1/2 rounded-lg" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-10 bg-green-300 w-full rounded-lg" />
            <Skeleton className="h-10 bg-white border border-green-300 w-full rounded-lg" />
          </div>

          <div className="space-x-2 flex justify-end">
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="size-5 w-2/6 rounded-lg" />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default ProductDetailSkeleton;
