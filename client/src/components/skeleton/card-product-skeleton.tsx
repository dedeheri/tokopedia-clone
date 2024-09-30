import React from "react";
import { Skeleton } from "../ui/skeleton";

const CardProductSkeleton = () => {
  return (
    <div className="h-[280px] w-full lg:w-[195px] group shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-xl">
      <div className="space-y-2">
        <Skeleton className="h-[188px] w-full rounded-t-xl" />

        <div className="px-2 space-y-2">
          <Skeleton className="h-4 rounded-full w-full bg-green-300" />
          <Skeleton className="h-4 rounded-full w-1/2 " />
          <Skeleton className="h-4 rounded-full w-10/12 bg-neutral-200" />
        </div>
      </div>
    </div>
  );
};

export default CardProductSkeleton;
