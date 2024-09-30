import React from "react";
import Link from "next/link";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  ArrowLeft,
  BellIcon,
  HeartIcon,
  LogOut,
  MailIcon,
  Menu,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import DialogSearchHeaderMobile from "./dialog-search-header-mobile";

interface IHeaderMobile {
  data: any;
  session: any;
}

const HeaderMobile = ({ data, session }: IHeaderMobile) => {
  const users = session[0]?.user;
  const status = session[1];

  const pathName = usePathname();
  const router = useRouter();

  const onSignIn = () => {
    router.push("/login");
  };

  return (
    <div className="h-auto border-b space-y-1 w-full px-4 bg-white z-50 md:hidden fixed top-0">
      <section className="flex items-center h-14 space-x-3">
        {pathName === "/" ? (
          <DialogSearchHeaderMobile />
        ) : (
          <div className="w-full">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className="size-8 p-0"
            >
              <ArrowLeft className="size-6 stroke-1" />
            </Button>
          </div>
        )}

        <div className="flex w-[13rem] ">
          {status === "loading" ? (
            <div className="flex items-center w-full space-x-3">
              <Skeleton className="size-8" />
              <Skeleton className="size-8" />
              <Skeleton className="size-8" />
              <Skeleton className="size-8" />
            </div>
          ) : (
            <div className="flex items-center w-full justify-between">
              {pathName === "/" ? (
                <div className="flex justify-between w-full">
                  <MailIcon className="size-6 stroke-1" />
                  <Link href={"/notification"}>
                    <BellIcon className="size-6 stroke-1" />
                  </Link>

                  <Link href={"/cart"} className="relative ">
                    <ShoppingCartIcon className="size-6 stroke-1" />
                    {data?.data?.totalCount > 0 && (
                      <div className="size-[15px] bg-red-500 rounded-md absolute -top-1.5 -right-1.5">
                        <p className="text-white text-[11px] flex justify-center items-center">
                          {data?.data?.totalCount}
                        </p>
                      </div>
                    )}
                  </Link>

                  {/* drawer */}
                  <Drawer>
                    <DrawerTrigger>
                      <Menu className="size-6 stroke-1" />
                    </DrawerTrigger>
                    <DrawerContent className="h-[95%] p-0 space-y-8">
                      <DrawerHeader className=" !mt-7 space-x-3 bg-white m-2 rounded-lg p-2 flex items-center shadow-[0_1px_6px_0_rgba(0,0,0,0.12)]">
                        <img
                          src={users?.image}
                          className="size-11 rounded-full"
                        />
                        <div className="space-y-1">
                          <div className="flex space-x-3">
                            <UserIcon className="size-5 text-neutral-600" />
                            <p>{users?.name}</p>
                          </div>
                          <div className="flex space-x-3">
                            <MailIcon className="size-5 text-neutral-600" />
                            <p className="font-medium text-neutral-500">
                              {users?.email}
                            </p>
                          </div>
                        </div>
                      </DrawerHeader>
                      <DrawerDescription className="space-y-5 p-0">
                        <div className="space-y-2">
                          <Button
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <ShoppingCartIcon className="size-6 text-neutral-700" />
                            <p className="text-md">Keranjang</p>
                          </Button>

                          <Button
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <HeartIcon className="size-6 text-neutral-700" />
                            <p className="text-md">Wishlist</p>
                          </Button>
                        </div>
                        <div className="bg-neutral-200 h-2" />

                        <div className="space-y-2">
                          <Button
                            onClick={() => signOut()}
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <LogOut className="size-6 text-neutral-700" />
                            <p className="text-md">Keluar</p>
                          </Button>
                        </div>
                      </DrawerDescription>
                    </DrawerContent>
                  </Drawer>
                </div>
              ) : (
                <div className="flex items-center justify-end space-x-3 w-full">
                  {/* search */}
                  <DialogSearchHeaderMobile />

                  {/* cart */}
                  <Link href={"/cart"} className="relative ">
                    <ShoppingCartIcon className="size-6 stroke-1" />
                    {data?.result?.totalCount > 0 && (
                      <div className="size-[15px] bg-red-500 rounded-md absolute -top-1.5 -right-1.5">
                        <p className="text-white text-[11px] flex justify-center items-center">
                          {data?.result?.totalCount}
                        </p>
                      </div>
                    )}
                  </Link>

                  {/* user */}
                  <Drawer>
                    <DrawerTrigger>
                      <Menu className="size-6 stroke-1" />
                    </DrawerTrigger>
                    <DrawerContent className="h-[95%] p-0 space-y-8">
                      <DrawerHeader className=" !mt-7 space-x-3 bg-white m-2 rounded-lg p-2 flex items-center shadow-[0_1px_6px_0_rgba(0,0,0,0.12)]">
                        <img
                          src={users?.image}
                          className="size-11 rounded-full"
                        />
                        <div className="space-y-1">
                          <div className="flex space-x-3">
                            <UserIcon className="size-5 text-neutral-600" />
                            <p>{users?.name}</p>
                          </div>
                          <div className="flex space-x-3">
                            <MailIcon className="size-5 text-neutral-600" />
                            <p className="font-medium text-neutral-500">
                              {users?.email}
                            </p>
                          </div>
                        </div>
                      </DrawerHeader>
                      <DrawerDescription className="space-y-5 p-0">
                        <div className="space-y-2">
                          <Button
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <ShoppingCartIcon className="size-6 text-neutral-700" />
                            <p className="text-md">Keranjang</p>
                          </Button>

                          <Button
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <HeartIcon className="size-6 text-neutral-700" />
                            <p className="text-md">Wishlist</p>
                          </Button>
                        </div>
                        <div className="bg-neutral-200 h-2" />

                        <div className="space-y-2">
                          <Button
                            onClick={() => signOut()}
                            variant="ghost"
                            className="w-full flex justify-start space-x-3"
                          >
                            <LogOut className="size-6 text-neutral-700" />
                            <p className="text-md">Keluar</p>
                          </Button>
                        </div>
                      </DrawerDescription>
                    </DrawerContent>
                  </Drawer>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {status === "unauthenticated" && (
        <section className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.tokopedia.net/img/home/login_widget/toped_login.png"
              className="size-[32px]"
            />

            <div className="-space-y-1">
              <h1 className="font-bold">Hai, Topper!</h1>
              <p className="text-sm text-neutral-600">
                Akses semua fitur, yuk~
              </p>
            </div>
          </div>

          <Button
            onClick={onSignIn}
            className="h-8 font-bold w-28 rounded-lg bg-green-600 hover:bg-green-700"
          >
            Masuk
          </Button>
        </section>
      )}
    </div>
  );
};

export default HeaderMobile;
