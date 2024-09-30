"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const currentDate = new Date();
const day = currentDate.getDate();
const dayAhead = currentDate.getDate() + 3;

export const couriers = [
  {
    courierName: "JNE",
    estimate: day + " - " + dayAhead,
    courierType: [
      {
        type: "Reguler",
        price: "Rp28.000",
      },
      {
        type: "Ekonomi",
        price: "Rp23.000",
      },
    ],
  },

  {
    courierName: "AnterAjA",
    estimate: day + " - " + dayAhead,
    courierType: [
      {
        type: "Reguler",
        price: "Rp28.000",
      },
    ],
  },
];

const CourierPayment = ({
  setCourierPrice,
}: {
  setCourierPrice: (price: string) => void;
}) => {
  const [courierName, setCourierName] = useState<any>(couriers[0]?.courierName);
  const [courierType, setCourierType] = useState<string>(
    couriers[0]?.courierType[0]?.type
  );

  const [selectedCourier, setSelectedCourier] = useState<any>();

  useEffect(() => {
    setCourierPrice(couriers[0]?.courierType[0]?.price);

    const type = couriers.find((couriers) => {
      return couriers.courierName === courierName;
    });

    setSelectedCourier(type);
  }, [courierName]);

  return (
    <div className="p-5 flex justify-between space-x-8">
      <div className="w-full space-y-2">
        <p className="text-sm font-bold">Pilih Pengiriman</p>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="w-full hover:bg-secondary border h-10 rounded-md items-center flex justify-between px-4">
              <p>{courierType}</p>
              <ChevronDown className="size-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[306px] space-y-3">
            {selectedCourier?.courierType?.map((courier: any, i: number) => (
              <DropdownMenuItem key={i} className="p-0">
                <div
                  onClick={() => {
                    setCourierType(courier.type),
                      setCourierPrice(courier.price);
                  }}
                  className="w-full hover:bg-secondary h-12  cursor-pointer flex items-center px-2 rounded-md"
                >
                  <div className="flex flex-col justify-start">
                    <p className=" font-bold">
                      {courier.type} ({courier.price})
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Estimasi tiba {courier.type}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full space-y-2">
        <p className="text-sm font-bold">Pilih Kurir</p>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="w-full hover:bg-secondary border h-10 rounded-md items-center flex justify-between px-4">
              <p>{courierName}</p>
              <ChevronDown className="size-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[306px] space-y-3">
            {couriers?.map((courier, i) => (
              <DropdownMenuItem className="p-0">
                <div
                  onClick={() => setCourierName(courier.courierName)}
                  className="w-full hover:bg-secondary h-12  cursor-pointer flex items-center px-2 rounded-md"
                >
                  <div className="flex flex-col justify-start">
                    <p className=" font-bold">{courier.courierName}</p>
                    <p className="text-sm font-medium text-gray-600">
                      Estimasi tiba {courier.estimate}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CourierPayment;
