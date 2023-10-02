import React from 'react'
import {Phone} from "lucide-react"
import {MapPin} from "lucide-react"
import {Mail} from "lucide-react"

export default function Contacts() {
  return (
    <div className='bg-gray-100 md:bg-white py-3 md:-mt-10 mt-64 md:mx-10 mx-3 md:py-8 flex flex-col gap-y-4 md:flex-row md:justify-evenly shadow-lg rounded'>
      <section className='flex flex-col items-center border border-subsec py-5 md:px-20 mx-10 rounded'>
      <Phone className='text-amber-500' size={40}/>
      <p className='mt-4'>+123 456 7890</p>
      <p>+123 456 7890</p>
      </section>

      <section className='flex flex-col items-center border border-subsec py-5 md:px-20 mx-10 rounded'>
      <Mail className='text-amber-500' size={40}/>
      <p className='mt-4'>info@example.com</p>
      <p>support@example.com</p>
      </section>

      <section className='flex flex-col items-center border border-subsec py-5 md:px-20 mx-10 rounded'>
      <MapPin className='text-amber-500' size={40}/>
      <p className='mt-4'>1569 Ave, New York,</p>
      <p>NY 10028, USA</p>
      </section>
    </div>
  )
}
