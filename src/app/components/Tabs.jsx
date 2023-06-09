"use client";

import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flex justify-center items-center gap-4 py-5 sm:gap-12 md:gap-30 lg:gap-32 sm:py-12 md:py-28">
      <Link
        href="/portfolio"
        className={`py-2 px-4 md:py-5 md:px-10 rounded-2xl text-center ${
          activeTab === 1
            ? `border-2 border-primary text-primary`
            : `text-white`
        } text-xl`}
        onClick={() => {
          setActiveTab(1);
        }}
      >
        Portfolio
      </Link>
      <Link
        href="/buyToken"
        className={`py-2 px-4 md:py-5 md:px-10 rounded-2xl text-center ${
          activeTab === 2
            ? `border-2 border-primary text-primary`
            : `text-white`
        } text-xl`}
        onClick={() => {
          setActiveTab(2);
        }}
      >
        Buy Token
      </Link>
      <Link
        href="/vesting"
        className={`py-2 px-4 md:py-5 md:px-10 rounded-2xl text-center ${
          activeTab === 3
            ? `border-2 border-primary text-primary`
            : `text-white`
        } text-xl`}
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
