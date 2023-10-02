import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
    return (
        <>

            <div className='absolute h-auto w-[100vw] bg-gray md:h-[45vh] overflow-hidden'>

                <Image className='absolute w-[100%] md:object-fill rounded-xl h-[100%] grayscale opacity-50'
                    src={"/news-letter-4.jpg"}
                    height={100}
                    width={100}
                    sizes='100vw'
                    alt={''} />

                <div className='relative md:left-[30vw] p-5'>

                    <p className='leading-7 [&:not(:first-child)]:mt-6 p-2'>
                        <span className="h-px mx-auto bg-black border-0 m-1 rounded w-[25px] inline-block mr-2" ></span>SUBSCRIBE TO OUR NEWSLETTER</p>

                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl p-2'>See The Latest Collection & Get Special Offer</h1>
                    <div className="flex w-full max-w-sm items-center space-x-2 p-2">
                        <Input className=" justify-center  w-[45vw]" type="email" placeholder="Email" />
                        <Button className="justify-center content-center w-auto p-2 md:pr-5 md:pl-5 bg-black text-white" type="submit">Subscribe</Button>
                    </div>
                    <h2 className='scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </div>

            </div>

        </>
    )
}

export default Newsletter