import { Button } from '@/components/ui/button';

const index = () => {
  return (
    <section>
      <div className="pb-10">
        <div className="flex items-center justify-center">
          <div className="w-full px-4 py-12 2xl:container sm:px-6 xl:px-20 2xl:mx-auto 2xl:px-0">
            <div className="jusitfy-center flex flex-col items-center">
              <div className="mb-2 flex flex-col items-center justify-center md:mb-10">
                <p className="text-xl text-subsec">Shop by</p>
                <h3 className="text-3xl font-semibold text-main">Category</h3>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 md:gap-x-8">
                <div className="mt-4 flex flex-col space-y-4 md:mt-0 md:space-y-8">
                  <div className="group relative flex h-full w-full items-center justify-center">
                    <img
                      className="h-80 w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      alt="shoe-image"
                    />
                    <Button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-main focus:text-subsec focus:outline-none focus:ring-2 focus:ring-offset-2">
                      Shoes
                    </Button>
                    <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="group relative flex h-full w-full items-center justify-center">
                    <img
                      className="h-80 w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                      alt="watch-image"
                    />
                    <Button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-main focus:text-subsec focus:outline-none focus:ring-2 focus:ring-offset-2">
                      Shoess
                    </Button>
                    <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="group relative mt-4 flex h-full w-full items-center justify-center md:mt-0">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg"
                    alt="girl-image"
                  />
                  <Button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-main focus:text-subsec focus:outline-none focus:ring-2 focus:ring-offset-2">
                    Shoes
                  </Button>
                  <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-8 flex flex-col space-y-4 md:mt-0 md:space-y-8">
                  <div className="group relative flex h-full w-full items-center justify-center">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?cs=srgb&dl=pexels-ray-piedra-1456706.jpg&fm=jpg"
                      alt="shoe-image"
                    />
                    <Button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-main focus:text-subsec focus:outline-none focus:ring-2 focus:ring-offset-2">
                      Shoes
                    </Button>
                    <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="group relative flex h-full w-full items-center justify-center">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="https://cdn.sanity.io/images/c1chvb1i/production/ced76eeeb7efdd1726fad1becc2bd968289ce4bd-1100x735.jpg"
                      alt="watch-image"
                    />
                    <Button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-main focus:text-subsec focus:outline-none focus:ring-2 focus:ring-offset-2">
                      Shoes
                    </Button>
                    <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 px-20 py-6 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 flex justify-center md:mt-10">
              <Button className="w-36 bg-main py-3 text-base font-medium leading-none text-text hover:bg-white hover:text-main hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-sub  focus:text-sub focus:outline-none">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
