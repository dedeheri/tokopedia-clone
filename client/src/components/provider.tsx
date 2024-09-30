"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider as ProviderRedux } from "react-redux";

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <SessionProvider>
      <ProviderRedux store={store}>{children}</ProviderRedux>
    </SessionProvider>
  );
}
