import React from "react";
import { Button } from "../ui/button";
import { Bell, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Notification = () => {
  return (
    <div className="relative group">
      <Button className="px-2.5 group-hover:bg-neutral-100" variant="ghost">
        <Bell className="text-neutral-700" />
      </Button>

      <div className=" z-50 h-0 w-[20rem] group-hover:translate-y-3 group-hover:h-[23rem] duration-300 top-9 right-0 rounded-xl absolute shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] bg-white">
        <div className="hidden group-hover:block">
          <div className="flex justify-between px-5 py-3 border-b">
            <h1 className="text-lg font-medium">Notifikasi</h1>
          </div>

          <div className="flex flex-col items-center mt-12 ">
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/4ac40a43.jpg"
              className="w-40 h-32 mb-4"
            />
            <p className="font-medium">Belum ada notifikasi</p>
            <p className="text-sm text-neutral-500">
              Notifikasi terkait transaksi kamu bakal
            </p>
            <p className="text-sm text-neutral-500">muncul di sini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
