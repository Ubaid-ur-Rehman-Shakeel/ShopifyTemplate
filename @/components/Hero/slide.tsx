/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Cursor } from 'react-simple-typewriter';

interface propsType {
    image: string;
    showButton: boolean;
    showText: boolean;
    buttonText?: string;
    buttonStyle?: string;
    buttonLink?: string;
    text?: string;
    heading?: string;
    textStyle?: string;
    sectionStyle?: string;
    headingStyle?: string;


}

export default function Slide({ image, showButton, showText, buttonText, buttonStyle, buttonLink, text, headingStyle, textStyle, sectionStyle, heading }: propsType) {
    return (
        <div className="relative bg-black/40 w-[100vw] h-[40vh] md:h-[80vh]">
            <Image
                className="w-[100%] md:object-fill rounded-xl h-[100%] bg-opacity-50"
                src={image}
                alt="banner"
                sizes='100vw'
                width={100}
                height={100}
            />



            <div className={sectionStyle}>

                {showText && (<div>
                    <h1 className={headingStyle}>{heading}</h1>
                    <p className={textStyle}>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='white'></Cursor>
                    </p>
                </div>)}
                {showButton && (
                    <Button  className={"w-36  py-4 px-8 text-base  leading-none bg-black text-[#ffffff] font-semibold cursor-pointer hover:bg-black/60 mx-10 my-5  "} >
                        <Link href={`${buttonLink}`}>{buttonText}</Link>
                    </Button>
                )}

            </div>


        </div>
    );
}