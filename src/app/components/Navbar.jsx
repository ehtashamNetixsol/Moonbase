"use client";

import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex gap-1 md:gap-5 justify-evenly items-center 3xl:py-8 py-4">
      <div className="flex gap-16">
        <Link href="/">
        <Image
          src="/assets/images/logo 1.svg"
          alt="moonbase_logo"
          height={41}
          width={349}
        />
        </Link>
        <ul className="lg:flex hidden lg:justify-between lg:gap-4 3xl:gap-12 3xl:text-2xl text-white text-xl">
          <li>Swap</li>
          <li>Pool</li>
          <li>IDO Launchpad</li>
        </ul>
      </div>

      {/* Toggle button for mobile screens */}

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="lg:flex hidden gap-8">
        <button
          className="flex items-center justify-center gap-1 3xl:w-[11.69rem] 3xl:h-[3.7rem] bg-primary 3xl:px-1 px-3 py-1 rounded-[15px] cursor-pointer"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Image
            src="/assets/images/favicon.png"
            height={30}
            width={30}
            alt="portfolioIcon"
          />
          <span className="font-bold text-lg">polygon</span>
          <FaAngleDown size={25}/>
        </button>

        {/* Modal popup */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <button className="flex items-center gap-2 3xl:w-[19.25rem] 3xl:h-[3.75rem] 3xl:justify-between border-2 border-primary rounded-[0.7rem] py-[0.5px] px-[1px]">
          <div className="text-white px-2 3xl:text-[1.4rem]">
            <span className="m-[0.63rem]">0</span>
            <span>mRock</span>
          </div>
          <span className="bg-primary py-[12px] 3xl:pt-[17px] 3xl:pb-[12px] rounded-[0.5rem] font-semibold px-4">
            0x752319...93fff
          </span>
        </button>

        <button>
          <Image
            src="/assets/images/Vector.svg"
            width={30}
            height={30}
            alt="settings"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
