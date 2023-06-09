import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Button from "./Button";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="text-white fixed bg-secondary transition ease-in-out duration-1000 inset-0 flex items-center justify-center"
    >
      <Dialog.Panel className="border-2 border-primary bg-secondary rounded-xl p-8 transition-all duration-1000">
        <Dialog.Title>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Select a Network</h1>
            <button
              className="text-white text-2xl font-semibold text-right"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
        </Dialog.Title>
        <Dialog.Description className="w-3/5 my-4">
          <p className="text-lg">
            You are currently browsing{" "}
            <span className="text-primary font-semibold">mRock</span> on the{" "}
            <span className="text-primary font-semibold">Polygon</span> network
          </p>
        </Dialog.Description>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            border="border-primary border-2"
            bgColor="bg-primary"
            width={80}
            height={80}
            imgPath="/assets/images/Group 182.svg"
          />
          <Button
            border="border-primary border-2"
            bgColor="bg-secondary"
            imgPath="/assets/images/Layer.svg"
          />
          <Button
            border="border-primary border-2"
            bgColor="bg-secondary"
            imgPath="/assets/images/Layer 1.svg"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
