import React, { useEffect, useState } from "react";

import { Products } from "@/types/products.type";
import { Skeleton } from "../ui/skeleton";

const ImageDetailProductMobile = ({
  data,
  isLoading,
}: {
  data: Products;
  isLoading: boolean;
}) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => setSelectedImage(data?.image?.[0]), [data]);

  return (
    <section>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="size-[497px]" />
          <div className="space-x-2 flex px-5">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="size-[62px] rounded-lg " />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <img src={selectedImage} />

          <div className="space-x-2 flex px-5">
            {data?.image?.map((_: string, i: number) => (
              <button key={i} onClick={() => setSelectedImage(_)}>
                <img
                  src={_}
                  className={`size-[62px] rounded-lg  ${
                    selectedImage === _ ? "border border-green-500" : "border"
                  }`}
                  alt={_}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageDetailProductMobile;
