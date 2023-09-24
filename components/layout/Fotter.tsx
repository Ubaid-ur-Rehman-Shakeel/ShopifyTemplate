import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Facebook, SendHorizontal } from 'lucide-react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import Image from "next/image";

export default function Foter() {
  return (
    <main className='bg-main pt-5 mt-5'>
    <section className='grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex justify-evenly mt-10 p-5 gap-10'>

      <div className="text-subsec">
        <h2 className='text-2xl font-bold'>Shoetopia</h2>
        <p className='mt-5 lg:w-56 w-auto mr-3'>Find your perfect pair of shoes for any occasion.</p>
      </div>

      <div className="text-subsec">
        <h3 className='font-semibold text-xl mb-3'>Product</h3>
        <p>Medical shoes</p>
        <p>Sneakers</p>
        <p>Boots</p>
      </div>

      <div className="text-subsec">
        <h3 className='font-semibold text-xl mb-3'>Support</h3>
        <p>Support Carrier</p>
        <p>24th Service</p>
        <p>Quick Chat</p>
      </div>
      
      <div className="text-subsec">
        <h3 className='font-semibold text-xl mb-3'>Company</h3>
        <p>Abouts</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>

      <div className="bg-slate-500 pt-2 pb-16 px-4 rounded text-white">
        <h3 className='text-xl font-semibold'>Join a Newslatter</h3>
        <div className="flex w-full max-w-sm items-center mt-3">
          <Input type="email" placeholder="Email" className="w-auto rounded-l"/>
          <Button type="submit" className='bg-yellow-500 rounded-r'><SendHorizontal strokeWidth={2} className='text-text'/></Button>
       </div>
    </div>


    </section>

        <div className='flex gap-1 items-center xl:mx-16 mx-6 mt-5 text-subsec'>
           <ul className="flex gap-1">
            <li><BsFacebook size={18}/></li>
            <li><AiFillTwitterCircle size={20}/></li>
            <li><AiFillInstagram size={20}/></li>
            </ul>
            <p className="">/Shoetopia</p>
        </div>

    <section className='mt-4 text-center py-2 bg-sub text-main'>  
        <p>© 2023 Panaverse. All rights reserved</p>     
    </section>

    </main>
  )
}
