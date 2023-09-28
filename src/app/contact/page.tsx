import React from 'react'
import Section from './Section'
import Contacts from './Contacts'
import Faqs from "./Faqs"

export default function page() {
  return (
    <div>
      <Section/>
      <Contacts/>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0 mt-20">

      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
      <Faqs que={"What is the meaning of FAQ?"}/>
      <Faqs que={"What is the meaning of FAQ?"}/>
      <Faqs que={"What is the meaning of FAQ?"}/>
      <Faqs que={"What is the meaning of FAQ?"}/>
      </section>
    </div>
  )
}
