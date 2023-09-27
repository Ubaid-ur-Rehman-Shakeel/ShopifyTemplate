"use client";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button"
import {FaqThree} from "./Faq"
import shoes from "../../../public/shoes.jpg";

export default function Section() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      comment: "",
    },
    onSubmit: (values) => {
      // Submit the form data
    },
  });

  return (
    <main className="bg-gray-100 h-screen w-full flex justify-center items-center md:-mt-20 pt-10">
      <div className="bg-text w-full md:mx-10 mx-3 flex flex-col md:flex-row shadow-slate-200 shadow-x-lg">
        <section className="md:mx-32 md:-mt-3 mb-3 mx-3">
          <Image src={shoes} alt="image" width={400} height={200} />
        </section>
        <section className="md:w-full mx-3">
          <h1 className="mt-12 text-3xl font-bold">Get in Touch with Us</h1>
          <form onSubmit={formik.handleSubmit} className="grid md:grid-cols-2 gap-7 mt-5 mr-5 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="border-b-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="border-b-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border-b-2"
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              className="border-b-2"
            />
            <input
              type="text"
              name="comment"
              placeholder="Comments"
              value={formik.values.comment}
              onChange={formik.handleChange}
              className="border-b-2"
            />
            <br />
            <Button type="submit" variant={"outline"} className="mr-auto rounded-sm border-black">Send</Button>
          </form>
        </section>
      </div>
      
    </main>
  );
}
