"use client";

import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4 py-5 sm:gap-12 md:gap-30 lg:gap-32 sm:py-12 md:py-28 3xl:gap-20">
      <Link
        href="/portfolio"
        className={`py-2 px-10  md:text-[1rem] lg:text-[1.3rem] 3xl:w-[14.77rem] 3xl:text-[1.7rem] md:py-5 md:px-10 rounded-2xl text-center ${
          activeTab === 1
            ? `border-2 border-primary text-primary`
            : `text-white`
        }`}
        onClick={() => {
          setActiveTab(1);
        }}
      >
        Portfolio
      </Link>
      <Link
        href="/buyToken"
        className={`py-2 px-10 md:py-5 md:px-10  md:text-[1rem] lg:text-[1.3rem] 3xl:w-[14.77rem] 3xl:text-[1.7rem] rounded-2xl text-center ${
          activeTab === 2
            ? `border-2 border-primary text-primary`
            : `text-white`
        }`}
        onClick={() => {
          setActiveTab(2);
        }}
      >
        Buy Token
      </Link>
      <Link
        href="/vesting"
        className={`py-2 px-10 md:py-5 md:px-10  md:text-[1rem] lg:text-[1.3rem] 3xl:w-[14.77rem] 3xl:text-[1.7rem] rounded-2xl text-center ${
          activeTab === 3
            ? `border-2 border-primary text-primary`
            : `text-white`
        }`}
        onClick={() => {
          setActiveTab(3);
        }}
      >
        Vesting
      </Link>
    </section>
  );
};

export default Tabs;
