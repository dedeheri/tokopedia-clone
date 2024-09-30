"use client";

import CartDesktop from "@/components/cart/cart-dekstop";
import Layout from "@/components/layout";
import MaxWidth from "@/components/max-width";
import { useFetchCartQuery } from "@/redux/services/cart.services";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const { data: cart, isLoading } = useFetchCartQuery(session?.user?.id ?? " ");

  return (
    <Layout classNames="!pt-0">
      <div className="bg-gray-100 w-full h-screen">
        <MaxWidth>
          <main className=" pt-40">
            <CartDesktop cart={cart} />
          </main>
        </MaxWidth>
      </div>
    </Layout>
  );
};

export default Page;
