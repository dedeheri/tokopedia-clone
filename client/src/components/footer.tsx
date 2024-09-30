import React from "react";
import MaxWidth from "./max-width";

const linkOneItems = [
  "Tentang Tokopedia",
  "Hak Kekayaan Intelektual",
  "Karir",
  "Blog",
  "Tokopedia Affiliate Program",
  "Tokopedia B2B Digital",
  "Tokopedia Marketing Solutions",
  "Kalkulator Indeks Masa Tubuh",
  "Tokopedia Farma",
  "Promo Hari Ini",
  "Beli Lokal",
  "Promo Guncang",
];
const linkTwoItems = ["Tagihan & Top Up", "Tokopedia COD", "Bebas Ongkir"];
const linkThreeItems = ["Pusat Edukasi Seller", "Daftar Official Store"];
const linkFourItems = [
  "Tokopedia Care",
  "Syarat dan Ketentuan",
  "Kebijakan Privasi",
];

const Footer = () => {
  return (
    <div className="border-t p-8">
      <MaxWidth>
        <div className="hidden lg:flex space-x-5 justify-between">
          {/* 1 */}
          <div className="flex flex-col space-y-0.5">
            <h1 className="font-bold text-lg">Tokopedia</h1>

            {linkOneItems.map((_, i) => (
              <span key={i} className="text-neutral-500">
                {_}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            {/* 2 */}
            <div className="flex flex-col space-y-0.5">
              <h1 className="font-bold text-lg">Beli</h1>
              {linkTwoItems.map((_, i) => (
                <span key={i} className="text-neutral-500">
                  {_}
                </span>
              ))}
            </div>
            {/* 3 */}
            <div className="flex flex-col space-y-0.5">
              <h1 className="font-bold text-lg">Jual</h1>
              {linkThreeItems.map((_, i) => (
                <span key={i} className="text-neutral-500">
                  {_}
                </span>
              ))}
            </div>
            {/* 4 */}
            <div className="flex flex-col space-y-0.5">
              <h1 className="font-bold text-lg">Jual</h1>
              {linkFourItems.map((_, i) => (
                <span key={i} className="text-neutral-500">
                  {_}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold text-lg">Keamanan & Privasi</h1>
            <div className="flex space-x-2">
              <img
                src={
                  "https://images.tokopedia.net/img/unify/icon_pci_license.webp"
                }
                alt="pci"
                className="w-[71px]"
              />
              <img
                src={
                  "https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"
                }
                alt="pci"
                className="w-[76px] p-1 border"
              />
            </div>
          </div>

          <div className="space-y-5">
            <img
              className="w-[460px] h-[223px]"
              src="https://images.tokopedia.net/img/unify/il_footer_hd_v2.png"
              alt="logo"
            />

            <div className="flex space-x-2 justify-center">
              <img
                src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg"
                alt="google play"
              />
              <img
                src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg"
                alt="app store"
              />
              <img
                src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg"
                alt="huawei"
              />
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
