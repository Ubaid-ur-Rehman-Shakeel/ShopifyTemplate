'use client'

import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { q } from './data'

export const FaqThree = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onclick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0 mt-20">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
        <div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {q.map((items)=> (
                 <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                     onClick={onclick}
                   >
                     <span className="flex text-lg font-semibold text-black">{items}</span>
       
                     {isOpen ? <ChevronDown className="h-5 w-5 text-gray-500" /> : <ChevronUp className="h-5 w-5 text-gray-500" />}
                   </button>
                   <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                     {isOpen ? <p className="text-gray-500">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                       iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                     </p> : <p></p>}
                   </div>
                 </div>
            ))}
            </div>
       
      {/* <div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
