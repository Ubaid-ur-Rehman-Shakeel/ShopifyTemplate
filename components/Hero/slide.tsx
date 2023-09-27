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
    heading?:string;
    textStyle?: string;
    sectionStyle?: string;

}

export default function slide({ image, showButton, showText, buttonText, buttonStyle, buttonLink, text, textStyle, sectionStyle,heading }: propsType) {
    return (
        <div className="relative w-[100vw] h-[80vh] ">
            <Image
                className="h-full w-full rounded-xl  object-right md:h-auto md:object-left-bottom shrink-0"
                src={image}
                alt="banner"
                fill
                sizes='100vw'
            />

            <div className={sectionStyle}>

                {showText && (<div className={textStyle}>
                    <h1 className='text-4xl lg:text-8xl md:text-6xl  font-semibold px-10 z-20 lg:ml-10 text-text'>{heading}</h1>
                    <p className='text-2xl lg:text-5xl md:text-4xl font-semibold px-10 z-20 mt-5  lg:ml-10 text-text'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='white'></Cursor>
                    </p>
                </div>)}
                {showButton && (
                    <Button variant={"outline"} className={buttonStyle}>
                        <Link href={`${buttonLink}`}>{buttonText}</Link>
                    </Button>
                )}

            </div>


        </div>
    );
}