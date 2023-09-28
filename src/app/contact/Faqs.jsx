"use client"
import React,{useState} from "react";
import { ChevronUp, ChevronDown } from 'lucide-react'


export default function Faqs({ que }) {
  const [isOpen, setIsOpen] = useState(false);

  const onclick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
      <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
        <button
          type="button"
          className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
          onClick={onclick}
        >
          <span className="flex text-lg font-semibold text-black">{que}</span>

          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          {isOpen ? (
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
              inventore ratione deleniti?
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
