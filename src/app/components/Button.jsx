import Image from "next/image";
import React from "react";

const Button = ({ border, bgColor, imgPath, pxpy="px-14 py-3", width="60", height="60" }) => {
  return (
    <button
      className={`flex items-center gap-1 ${bgColor} ${border} ${pxpy} rounded-[15px] font-bold cursor-pointer`}
      type="button"
    >
      <Image src={imgPath} height={height} width={width} alt="Img" />
    </button>
  );
};

export default Button;
