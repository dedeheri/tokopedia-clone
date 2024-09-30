"use client";

import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Skeleton } from "./ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const images = [
    "https://images.tokopedia.net/img/NsjrJu/2020/9/25/b1d2ed1e-ef80-4d7a-869f-a0394f0629be.jpg?ect=4g",
    "https://images.tokopedia.net/img/home/defaultbanner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/22/6d79d227-67fe-497a-a904-af990882e2ee.jpg.webp?ect=4g",
  ];

  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button className="bg-white rounded-full size-10 flex items-center justify-center !-left-[21px] translate-x-7  absolute group-hover:translate-x-0 duration-500 shadow-xl opacity-0 group-hover:opacity-100">
        <ChevronLeft className="size-6 text-neutral-600" />
      </button>
    ),
    nextArrow: (
      <button className="bg-white rounded-full size-10 flex items-center justify-center !-right-[21px] -translate-x-7  absolute group-hover:-translate-x-0 duration-500 shadow-xl opacity-0 group-hover:opacity-100">
        <ChevronRight className="size-6 text-neutral-600" />
      </button>
    ),
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <Skeleton className="w-full h-[110px] md:h-[184px] lg:h-[302px] rounded-2xl" />
      ) : (
        <div className="group relative">
          <Slide duration={2000} {...properties}>
            {images.map((_, i) => (
              <img
                key={i}
                src={_}
                className="w-full h-[10rem] md:h-full rounded-2xl "
              />
            ))}
          </Slide>
        </div>
      )}
    </div>
  );
};

export default Banner;
