"use client";

import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import MaxWidth from "./max-width";
import { Skeleton } from "./ui/skeleton";

const BadgeFilterProduct = () => {
  const { data } = useSession();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => setLoading(false), 3000);
  }, []);

  const [hoveredBadge, setHoveredBadge] = useState<number>(1);

  const badge = [
    {
      id: 1,
      text: data ? `For ${data?.user?.name}` : "For You",
      color: "bg-pink-600",
    },
    {
      id: 2,
      text: "Samsung Official Store",
      color: "bg-green-600",
    },
    {
      id: 3,
      text: "Xiaomi Official Store",
      color: "bg-blue-600",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 900) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div
      className={`sticky top-[7.5rem] z-50 bg-white h-[80px] hidden md:block ${
        scrolled ? "drop-shadow-md" : "shadow-none"
      }`}
    >
      <MaxWidth>
        {loading ? (
          <div className="flex space-x-3 items-center">
            <Skeleton className="lg:w-[216px] lg:h-[64px] rounded-lg bg-pink-200" />
            <Skeleton className="lg:w-[216px] lg:h-[64px] rounded-lg bg-green-200" />
            <Skeleton className="lg:w-[216px] lg:h-[64px] rounded-lg bg-yellow-200" />
          </div>
        ) : (
          <div className="flex space-x-3 items-center">
            {badge?.map((bdg) => (
              <button
                key={bdg.id}
                onClick={() => setHoveredBadge(bdg.id)}
                className={`lg:w-[216px] lg:h-[64px] rounded-lg p-3 flex justify-start  ${bdg.color}`}
              >
                <div className="w-full">
                  <div
                    className={` h-[3px] duration-300 rounded-xl ${
                      hoveredBadge === bdg.id
                        ? "w-10 border-[1.5px] bg-white"
                        : "bg-white w-0"
                    }`}
                  />
                  <h1 className="font-bold text-white flex justify-start text-md ">
                    {bdg.text}
                  </h1>
                </div>
              </button>
            ))}
          </div>
        )}
      </MaxWidth>
    </div>
  );
};

export default BadgeFilterProduct;
