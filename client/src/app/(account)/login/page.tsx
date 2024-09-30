"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface ISignIn {
  email: null;
  password: null;
}

const Page = () => {
  const [stateSignin, setStateSignin] = useState<ISignIn>({
    email: null,
    password: null,
  });

  const onChange = (events: React.ChangeEvent<HTMLInputElement>) => {
    setStateSignin({ ...stateSignin, [events.target.id]: events.target.value });
  };

  const params = useSearchParams();
  const callback = params.get("callback") as string;

  const onSubmitGoogle = async () => {
    await signIn("google", { callbackUrl: callback ? callback : "/" });
  };

  return (
    <section className="h-full w-screen flex flex-col justify-center items-center relative">
      <img
        className="w-[160px] h-[34px] absolute top-10"
        src="https://images.tokopedia.net/img/oauth/background/tkp-logo.png"
      />

      <img
        className="hidden lg:block w-[816px] h-[587px] top-[8.5rem] absolute"
        src="https://images.tokopedia.net/img/oauth/background/login-bg.png"
      />

      <article className="absolute top-[8rem] lg:top-[9rem] w-full lg:w-auto px-5">
        <form className="w-full h-full bg-white lg:w-[368px] lg:h-[500px] rounded-lg lg:shadow-[0_1px_6px_0_rgba(0,0,0,0.12)]  lg:p-8">
          <div className="my-10 hidden lg:flex lg:justify-between lg:items-center">
            <h1 className="font-bold text-lg">Masuk ke Tokopedia</h1>
            <Link href={"/register"} className="text-sm text-green-600">
              Daftar
            </Link>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <input
                onChange={onChange}
                type="text"
                id="email"
                className="block px-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer border h-11"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                onChange={onChange}
                type="text"
                id="password"
                className="block px-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer border h-11"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Kata sandi
              </label>
            </div>

            <Button
              disabled={
                stateSignin.email && stateSignin.password ? false : true
              }
              className={`h-11 font-bold w-full text-md ${
                stateSignin.email && stateSignin.password
                  ? " bg-green-600 hover:bg-green-700 "
                  : "bg-[#e4ebf5] text-neutral-700"
              } `}
            >
              Masuk
            </Button>

            <div className="flex items-center space-x-4 ">
              <Separator className="flex-grow  w-auto" />
              <p className="text-sm whitespace-nowrap">atau masuk dengan</p>
              <Separator className="flex-grow w-auto" />
            </div>

            <Button
              onClick={onSubmitGoogle}
              type="button"
              variant="outline"
              className="h-11 font-bold w-full text-md"
            >
              Google
            </Button>

            <div className="lg:hidden flex justify-center items-center space-x-2">
              <p className="text-sm">Belum punya akun? </p>
              <Link href={"/register"} className="text-sm text-green-600">
                Daftar
              </Link>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Page;
