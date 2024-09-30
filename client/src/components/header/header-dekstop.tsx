import React from "react";
import Nav from "./nav";
import Link from "next/link";
import Search from "./search";
import Cart from "./cart";
import { Separator } from "../ui/separator";
import Notification from "./notification";
import Mail from "./mail";
import UserToggle from "../user-toggle";

import { Cart as ICart } from "@/types/carts.type";
import { Skeleton } from "../ui/skeleton";
import SectionAuthHeader from "../section-auth-header";
import { MapPin } from "lucide-react";

interface IHeaderDesktop {
  cart: ICart;
  isLoading: boolean;
  session: any;
}

const HeaderDekstop = ({ cart, isLoading, session }: IHeaderDesktop) => {
  const users = session[0]?.user;
  const status = session[1];

  return (
    <div className="fixed top-0  shadow-sm bg-white !z-50 md:h-[126px] justify-between hidden md:flex flex-col lg:items-center md:border-b w-full">
      {/* nav */}
      <Nav />

      <div className=" md:flex space-x-8 items-center justify-between h-[65px] w-full  px-10 ">
        {/* logo */}
        <div className="flex md:space-x-7 lg:space-x-10 items-center  w-[16rem]">
          <Link href={"/"}>
            <img
              src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              className="w-[145px] h-[32px]"
            />
          </Link>
          <p>Kategori</p>
        </div>

        {/* search */}
        <div className="grow">
          <Search />
        </div>

        <div className="flex space-x-2 items-center w-[16rem]">
          {status === "loading" ? (
            <div className="flex items-center space-x-3">
              <Skeleton className="size-8" />
              <Skeleton className="size-8" />
              <Skeleton className="size-8" />
              <Separator orientation="vertical" className="h-6 " />
              <Skeleton className="size-9 rounded-full" />
              <Skeleton className="w-16 h-5 rounded-full" />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Cart data={cart?.data} loading={isLoading} />

              {status === "authenticated" ? (
                <div className="flex space-x-2 items-center">
                  <Notification />
                  <Mail />
                  <Separator orientation="vertical" className="h-6 " />
                  <UserToggle user={users} />
                </div>
              ) : (
                <SectionAuthHeader />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="h-7 w-full flex space-x-2 items-center justify-end px-11 ">
        <MapPin className="size-5" />
        {status === "authenticated" ? (
          <p className="text-sm">
            Dikirim ke <span className="font-bold">Rumah {users?.name}</span>
          </p>
        ) : (
          <p>Dikirim ke Jakarta</p>
        )}
      </div>
    </div>
  );
};

export default HeaderDekstop;
