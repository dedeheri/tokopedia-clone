"use client";

import React, { useContext } from "react";

import { useSession } from "next-auth/react";

import { useFetchCartQuery } from "@/redux/services/cart.services";
import HeaderMobile from "./header-mobile";
import HeaderDekstop from "./header-dekstop";

const Header = () => {
  const { data: session, status } = useSession();
  const { data: cart, isLoading } = useFetchCartQuery(session?.user?.id ?? " ");

  return (
    <header>
      <HeaderMobile data={cart} session={[session, status]} />

      <HeaderDekstop
        cart={cart}
        isLoading={isLoading}
        session={[session, status]}
      />
    </header>
  );
};

export default Header;
