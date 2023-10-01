"use client"
import Slider from 'react-slick';
import Slide from './slide';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false,
        adaptiveHeight: true,

    };

    const [text1] = useTypewriter({
        words: [
            "Your Feet, Your Fashion,\n Your Store.",
        ],
        loop: true,
        delaySpeed: 1000,
    });
    
    const [text2] = useTypewriter({
        words: [
            "lorem ipsum lorem ipsum",
        ],
        loop: true,
        delaySpeed: 1000,
    });
    const [text3] = useTypewriter({
        words: [
            "Check out",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    const slideData = [
        {
            id: 0,
            image: '/banner-5.jpg',
            showButton: true,
            showHeading: true,
            text: text1,
            buttonText: "Buy now!",
            heading: "Urban Treasures",
            sectionStyle: "absolute top-[10vh] md:top-[25vh] md:left-[5vw]",
            headingStyle: "text-3xl lg:text-8xl md:text-6xl  font-semibold mx-10 z-20 lg:ml-10 text-[#FFFFFF]",
            textStyle: "text-1xl lg:text-5xl md:text-4xl font-semibold mx-10 z-20 mt-2 lg:mt-5 lg:ml-10 text-[#FFFFFF]"

        },
        {
            id: 1,
            image: '/banner-7.jpg',
            showButton: true,
            showHeading: true,
            text: text2,
            buttonText: "Explore",
            heading: "New Arrival",
            sectionStyle: "absolute top-[12vh] md:top-[25vh] md:left-[15vw]",
            headingStyle: "text-3xl lg:text-8xl md:text-6xl  font-semibold mx-10 z-20 lg:ml-10 text-[#FFFFFF]",
            textStyle: "text-1xl lg:text-5xl md:text-4xl font-semibold mx-10 z-20 mt-2  lg:ml-10 text-[#FFFFFF]"
        },
        {
            id: 2,
            image: '/banner-8.jpg',
            showButton: true,
            showHeading: true,
            text: text3,
            buttonText: "Sale%",
            heading: "Sale 50%",
            sectionStyle: "absolute top-[8vh] left-[45vw] md:top-[25vh] md:left-[50vw]",
            headingStyle: "text-3xl lg:text-8xl md:text-6xl  font-semibold mx-10 z-20 lg:ml-10 text-[#FFFFFF]",
            textStyle: "text-1xl lg:text-5xl md:text-4xl font-semibold mx-10 z-20 mt-2 lg:ml-10 text-[#FFFFFF]"
        }
    ];



    return (

        <div id="hero" className='lg:pt-0  lg:top'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        image={item.image}
                        showButton={item.showButton}
                        buttonText={item.buttonText}
                        showText={item.showHeading}
                        text={item.text}
                        heading={item.heading}
                        sectionStyle={item.sectionStyle}
                        headingStyle={item.headingStyle}
                        textStyle={item.textStyle}


                    />
                ))}
            </Slider>
        </div>


    );
};

export default Hero;
