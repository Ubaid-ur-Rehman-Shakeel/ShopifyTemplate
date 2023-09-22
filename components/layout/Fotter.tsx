import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, SendHorizontal } from 'lucide-react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

export default function Foter() {
  return (
    <main className='bg-yellow-100 '>
    <section className='flex justify-evenly mt-10 p-10'>

      <div>
        <h2 className='text-2xl font-bold '>Shoetopia</h2>
        <p className='mt-5 w-56'>Find your perfect pair of shoes for any occasion.</p>
      </div>

      <div>
        <h3 className='font-semibold text-xl mb-3'>Product</h3>
        <p>Medical shoes</p>
        <p>Sneakers</p>
        <p>Boots</p>
      </div>

      <div>
        <h3 className='font-semibold text-xl mb-3'>Support</h3>
        <p>Support Carrier</p>
        <p>24th Service</p>
        <p>Quick Chat</p>
      </div>
      
      <div>
        <h3 className='font-semibold text-xl mb-3'>Company</h3>
        <p>Abouts</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>

      <div>
        <h3 className='text-xl font-semibold'>Join a Newslatter</h3>
        <div className="flex w-full max-w-sm items-center mt-3">
          <Input type="email" placeholder="Email" />
          <Button type="submit" className='bg-black'><SendHorizontal strokeWidth={2} className='text-white'/></Button>
       </div>
    </div>

    </section>

    <section className='flex justify-between'>
        <p>©2023 Shoetopia Sneakers</p>

        <ul className='flex '>
            <li><BsFacebook size={20}/></li>
            <li><AiFillTwitterCircle/></li>
            <li><AiFillInstagram/></li>
        </ul>
    </section>

    </main>
  )
}
