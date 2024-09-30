import React from "react";

const CommentProductDetail = () => {
  return (
    <section className="space-y-5">
      <h1 className="font-bold text-lg">ULASAN PEMBELI</h1>

      <div className="shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-2xl w-full h-[171px]">
        <div className="flex justify-center items-center h-full space-x-10">
          <img
            alt="ulasan"
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6fa168bf.png"
            className="w-[130px] h-[110px]"
          />

          <div>
            <h1 className="text-2xl font-bold">
              Belum ada ulasan untuk produk ini
            </h1>
            <p className="text-neutral-500 text-sm">
              Beli produk ini dan jadilah yang pertama memberikan ulasan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentProductDetail;
