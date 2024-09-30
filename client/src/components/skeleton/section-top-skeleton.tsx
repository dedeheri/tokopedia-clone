import React from "react";
import { Skeleton } from "../ui/skeleton";

const SectionTopUpSkeleton = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex w-full space-x-3">
        <div className=" space-y-5 w-full">
          <Skeleton className="rounded-2xl h-7 w-1/3" />

          <Skeleton className="rounded-lg w-full h-40" />
        </div>

        <div className="w-full space-y-5">
          <Skeleton className="rounded-2xl h-7 w-1/3" />

          <div className="border space-y-3 p-2 rounded-lg">
            <div className="flex space-x-3 ">
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
            </div>
            <div className="flex space-x-3 ">
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
              <Skeleton className="rounded-2xl h-5 w-full" />
            </div>
          </div>
        </div>
      </div>

      <Skeleton className="rounded-2xl h-10" />
    </div>
  );
};

export default SectionTopUpSkeleton;
