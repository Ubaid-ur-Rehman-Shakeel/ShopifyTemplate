"use client";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import Image from "next/image";
import sneaker from "../../../public/sneaker.jpg";
import { Contactusscehema } from "lib/Schemas/contactus";
export default function Section() {
  const initialValues = {
    firstname: "",
    lastname:"",
    email: "",
    phoneNumber:"",
    comment:"",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Contactusscehema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

      

  return (
    <main className="bg-gray-100 h-screen w-full flex justify-center items-center md:-mt-20 pt-10">
      <div className="bg-text w-full md:mx-10 mx-3 flex flex-col md:flex-row shadow-slate-200 shadow-x-lg">
        <section className="md:mx-32 md:-mt-3 mb-3 mx-3">
          <Image src={sneaker} alt="image" width={600} height={1200} />
        </section>
        <section className="md:w-full mx-3">
          <h1 className="mt-12 text-3xl font-bold">Get in Touch with Us</h1>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-7 mt-5 mr-5 ">
          <div className="flex flex-col h-10">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={handleChange}
              
              onBlur={handleBlur}
              className="bg-gray-200 sm:px-5 px-3 py-2 rounded-xl placeholder:text-black placeholder:text-start text-start"
            />
             {touched.firstname && errors.firstname ? (
                <p className="text-red-400 px-3">{errors.firstname}</p>
              ) : null}
              </div>
              <div className="flex flex-col h-10">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
             
              onBlur={handleBlur}
              className="bg-gray-200 sm:px-5 px-3 py-2 rounded-xl placeholder:text-black placeholder:text-start text-start"
            />
             {touched.lastname && errors.lastname ? (
                <p className="text-red-400 px-3">{errors.lastname}</p>
              ) : null}
              </div>
              <div className="flex flex-col h-10">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-200 sm:px-5 px-3 py-2 rounded-xl placeholder:text-black placeholder:text-start text-start"
            />
             {touched.email && errors.email ? (
                <p className="text-red-400 px-3">{errors.email}</p>
              ) : null}
              </div>
              <div className="flex flex-col h-10">
            <input
              type="tel"
              name="phoneNumber"
              autoComplete="off"
              
              placeholder="Phone Number"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-200  sm:px-5 px-3 py-2 rounded-xl placeholder:text-black placeholder:text-start text-start"
            />
             {touched.phoneNumber && errors.phoneNumber ? (
                <p className="text-red-400 px-3">{errors.phoneNumber}</p>
              ) : null}
              </div>
              <div className="flex flex-col h-10">
            <input
              type="text"
              name="comment"
              placeholder="Comments"
              value={values.comment}
              onChange={handleChange}
              
              onBlur={handleBlur}
              className="bg-gray-200  sm:px-5 px-3 py-2 rounded-xl w-[41rem] placeholder:text-black placeholder:text-start text-start"
            />
             {touched.comment && errors.comment ? (
                <p className="text-red-400 px-3">{errors.comment}</p>
              ) : null}
              </div>
            <br />
            <Button type="submit" variant={"outline"} className="mr-auto rounded-sm border-black">Send</Button>
          </form>
        </section>
      </div>
      
    </main>
  );
}
