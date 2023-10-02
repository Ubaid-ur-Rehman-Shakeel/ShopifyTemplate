/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Team from '@/components/about/team';
import CountUp from 'react-countup';




const AboutUs = () => {

    return (
    
    
            <div className='overflow-x-hidden'>
                <div className="text-center">

                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>About The Company</h1>
                    <p className='scroll-m-20 pb-2 text-1xl  tracking-tight transition-colors first:mt-0 pr-10 pl-10 pt-10'>Welcome to Urban Treasures, where style meets comfort in every step. At Urban Treasures, we're more than just a shoe company; we're a reflection of your unique urban lifestyle. Our mission is to provide you with footwear that not only looks good but also feels great. Whether you're strolling through city streets, dancing the night away, or simply running errands, our carefully crafted shoes are designed to keep you on your feet, all day and all night. With a commitment to quality, fashion-forward designs, and a touch of sophistication, Urban Treasures is your go-to destination for footwear that elevates your style and enhances your comfort. Step into a world of urban treasures, where your journey is as important as your destination.

                    </p>


                    <div className='flex justify-center mt-10 flex-col md:flex-row h-auto width-[100vw] bg-gray-200 p-10'>


                        <Image className='md:pr-20'
                            src={"/aboutus-pic-2.avif"}
                            alt='' height={400}
                            width={400}
                        />


                        <div>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Wear Better, lorem ipsum
                            </p>
                            <h1 className="scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl">
                                We're only just getting<br />started on our journey
                            </h1>

                            {/* 
                        <div className='flex flex-col md:flex-row items-center justify-center'>
                            <h1 className='scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors first:mt-0'>400+
                            
                            <p>Projects completed</p>
                            </h1>
                            <h2 className='scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors first:mt-0'>
                                600%
                                <p>Return on investment</p>
                                </h2>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center'>
                        <h3 className='scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors first:mt-0'>
                                10K
                                <p>Global downloads</p>
                            </h3>
                            <h4 className='scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors first:mt-0'>
                            200+
                            <p>5-star reviews</p>
                            </h4>
                        </div> */}

                            <div className='grid grid-cols-1 gap-4 items-center justify-center text-left pt-10 md:grid-cols-2 md:text-center'>
                                <div>

                                    <h1 className='scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl'>
                                        <CountUp start={0} end={4000} duration={3} delay={0} />+

                                    </h1>
                                    <p>Projects completed</p>
                                </div>
                                <div>

                                    <h2 className='scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl'>
                                        <CountUp start={0} end={6000} duration={3} delay={0} />%
                                    </h2>
                                    <p>Return on investment</p>
                                </div>

                                <div>

                                    <h3 className='scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl'>
                                        <CountUp start={0} end={10} duration={3} delay={0} />K
                                    </h3>
                                    <p>Global downloads</p>
                                </div>

                                <div>

                                    <h4 className='scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl'>
                                        <CountUp start={0} end={500} duration={3} delay={0} />+
                                    </h4>
                                    <p>5-star reviews</p>

                                </div>
                            </div>

                        </div>


                    </div>








                </div>
                <div>
                    <Team />
                </div>
                <div className='w-[100vw] h-auto bg-gray-200 items-center text-center pt-5 lg:h-auto'>
                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Can We Help You</h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-4 p-5" >Our dedicated team is here to assist you. Whether you have questions, need support, or simply want to chat, we're just a click or call away. Let us know how we can help you today.</p>


                    <div className='flex justify-center pt-[6.8em]'>
                        <SocialIcon
                            key={1}
                            url={"www.facebook.com"}
                            fgColor='gray'
                            bgColor='transparent'
                        />
                        <SocialIcon
                            key={1}
                            url={"www.twitter.com"}
                            fgColor='gray'
                            bgColor='transparent'
                        />
                        <SocialIcon
                            key={1}
                            url={"www.instagram.com"}
                            fgColor='gray'
                            bgColor='transparent'
                        />
                        <SocialIcon
                            key={1}
                            url={"www.google.com"}
                            fgColor='gray'
                            bgColor='transparent'
                        />

                    </div>



                </div>








            </div>

    )
}

export default AboutUs