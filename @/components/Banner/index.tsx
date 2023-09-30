import { Button } from "../ui/button";

const BannerSection = () => {
  return (
<div className="bg-cover bg-center h-auto text-white py-20 px-10" style={{ backgroundImage: 'url(home-banner.jpg)' }}>
       <div className="md:w-1/2 lg:w-1/3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-main">Sales up to 50% OFF</h2>
        <p className="text-base my-7 text-main md:text-white">Molestie amet tempor, diam id magna ridiculus tincidunt cursus curabitur non ipsum mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at</p>
        <Button className="w-36 bg-main py-4 px-8 text-base font-medium leading-none text-text hover:bg-sub hover:text-main hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-main focus:text-main focus:outline-none">
                Shop Now
              </Button>
        </div>  
    </div>
  );
};

export default BannerSection;
