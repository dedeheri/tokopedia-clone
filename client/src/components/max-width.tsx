import React from "react";

const MaxWidth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1208px] mx-auto space-y-8 px-5 xl:px-0">
      {children}
    </div>
  );
};

export default MaxWidth;
