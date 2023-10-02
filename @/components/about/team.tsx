import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Team = () => {
    return (

        <>
            <div className='text-center'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl'>Meet Our Team</h1>
                <p className='scroll-m-20 pb-2 text-1xl  tracking-tight transition-colors first:mt-0 pr-10 pl-10 pt-10'>Our phiosophy is simple ---- hire a team of diverse, passionate people and foster<br /> a culture that empowers you to your best work
                </p>

                <Button className='mr-5  mt-5 pr-10 pl-10 bg-black text-white hover:bg-gray hover:text-black'>X Y Z</Button>
                <Button className='pr-10 pl-10 bg-black text-white hover:bg-gray hover:text-black'>X Y Z</Button>


                {/* <div className='grid grid-cols-4'>
             */}
                <div className='grid grid-rows-1 p-10 place-items-center gap-10 md:grid-cols-4 md:gap-5'>
                    <div>
                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>
                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>
                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>

                    </div>

                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>

                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>

                    </div>

                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>
                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>
                    <div>

                        <Card className='team-card'>
                            <CardHeader>
                                <Image className='team-card-img'
                                    src={"/hero-img-3.jpg"} alt='' height={100} width={100} />
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Founder & ceo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Former co-founder of XYZ.Early staff at</p>
                            </CardContent>
                            <CardFooter>
                                <SocialIcon
                                    key={1}
                                    url={"www.twitter.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.github.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                                <SocialIcon
                                    key={1}
                                    url={"www.linkedin.com"}
                                    fgColor='gray'
                                    bgColor='transparent'
                                />

                            </CardFooter>
                        </Card>
                    </div>

                </div>




            </div>



        </>
    )
}

export default Team