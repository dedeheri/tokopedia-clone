import React from "react";
import Header from "./header/header";
import Footer from "./footer";

const Layout = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div>
      <Header />
      <div className={`py-[4rem] md:py-[10rem] ${classNames}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
