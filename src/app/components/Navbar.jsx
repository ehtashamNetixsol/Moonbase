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
    <nav className="flex gap-1 md:gap-5 justify-evenly items-center py-5">
      <div className="flex gap-4">
        <Image
          src="/assets/images/logo 1.svg"
          alt="moonbase_logo"
          height={41}
          width={250}
        />
        <ul className="lg:flex hidden lg:justify-between lg:gap-4 text-white text-xl">
          <li>Swap</li>
          <li>Pool</li>
          <li>IDO Launchpad</li>
        </ul>
      </div>

      {/* Toggle button for mobile screens */}

      <div className="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="lg:flex hidden gap-3">
        <button
          className="flex items-center gap-1 bg-primary px-3 py-1 rounded-[15px] font-semibold cursor-pointer"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Image
            src="/assets/images/favicon.png"
            height={20}
            width={20}
            alt="favicon"
          />
          polygon
          <FaAngleDown />
        </button>

        {/* Modal popup */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <button className="flex items-center gap-2 border-2 border-primary rounded-[0.7rem] py-[0.5px] px-[1px]">
          <div className="text-white px-2">
            <span>0</span>
            <span>mRock</span>
          </div>
          <span className="bg-primary py-[12px] rounded-[0.5rem] font-semibold text-sm px-4">
            0x752319...93fff
          </span>
        </button>

        <button>
          <Image
            src="/assets/images/Vector.svg"
            width={25}
            height={25}
            alt="settings"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
