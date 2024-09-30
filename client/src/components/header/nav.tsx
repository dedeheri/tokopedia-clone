import Link from "next/link";
import React from "react";

export const linkNav = [
  {
    href: "https://www.tokopedia.com/about/",
    text: "Tentang Tokopedia",
  },
  {
    href: "https://www.tokopedia.com/mitra",
    text: "Mitra Tokopedia",
  },
  {
    href: "https://seller.tokopedia.com/edu/topic/mulai-bisnis/materi-seller-baru/",
    text: "Mulai Berjualan",
  },
  {
    href: "https://www.tokopedia.com/discovery/deals",
    text: "Promo",
  },
  {
    href: "https://www.tokopedia.com/help/",
    text: "Tokopedia Care",
  },
];

const Nav = () => {
  return (
    <div className="w-full h-[32px]  bg-neutral-100 px-8 flex items-center justify-between">
      <div className="flex items-center relative group space-x-2 text-neutral-500 hover:text-green-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={23}
          height={23}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-400"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
          <path d="M11 4h2" />
          <path d="M12 17v.01" />
        </svg>
        <p className="text-sm whitespace-nowrap">Download Tokopedia App</p>

        <div className="bg-white w-[28rem] h-[15rem] top-8 rounded-lg shadow-xl absolute hidden group-hover:flex duration-500 p-8  items-center space-x-6">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/d8464ebd.png"
            className="border rounded-xl border-green-500 w-40 h-40"
          />
          <div className="space-y-2">
            <p className="text-center text-black">
              Scan this QR or download app from:
            </p>
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e25ec508.svg"
              className="w-28 h-9 mx-auto"
            />
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/4cc56a99.svg"
              className="w-28 h-9  mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="space-x-6">
        {linkNav.map((nav: any, i) => (
          <Link key={i} href={nav.href}>
            <span className="text-sm whitespace-nowrap text-neutral-500 hover:text-green-500">
              {nav.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
