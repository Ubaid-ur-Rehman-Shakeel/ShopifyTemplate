
const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-main">
      <div className="mb-10 flex flex-col items-center justify-center">
                <p className="text-xl text-sub">Why</p>
                <h3 className="text-3xl font-semibold text-white">Choose Us</h3>
              </div>
           <div className="mx-auto px-5 max-w-7xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md border border-subsec bg-sub p-6 text-center shadow">
                <div className="mx-auto flex h-24 w-24 items-center justify-center">
                   <img src="https://cdn-icons-png.flaticon.com/512/2652/2652181.png" alt="discount icon" className="h-auto w-20" /> 
                </div>
                <h3 className="mt-2 text-main text-lg font-bold">Big Discounts</h3>
                <p className="mt-2 font-normal text-subsec text-justify">Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo. </p>
            </div>
            <div className="rounded-md border border-subsec bg-sub p-6 text-center shadow">
                <div className="mx-auto flex h-24 w-24 items-center justify-center">
                   <img src="https://cdn-icons-png.flaticon.com/512/3233/3233997.png" alt="free-shipping icon" className="h-auto w-32" /> 
                </div>
                <h3 className="mt-2 text-main text-lg font-bold">Free Shipping</h3>
                <p className="mt-2 font-normal text-subsec text-justify">Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo. </p>
            </div>
            <div className="rounded-md border border-subsec bg-sub p-6 text-center shadow">
                <div className="mx-auto flex h-24 w-24 items-center justify-center">
                   <img src="https://cdn-icons-png.flaticon.com/512/4575/4575124.png" alt="secure-payment icon" className="h-auto w-32" /> 
                </div>
                <h3 className="mt-2 text-main text-lg font-bold">Secure Payments</h3>
                <p className="mt-2 font-normal text-subsec text-justify">Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo. </p>
            </div>
            <div className="rounded-md border border-subsec bg-sub p-6 text-center shadow">
                <div className="mx-auto flex h-24 w-24 items-center justify-center">
                   <img src="https://cdn-icons-png.flaticon.com/512/8776/8776368.png" alt="easy-return icon" className="h-auto w-32" /> 
                </div>
                <h3 className="mt-2 text-main text-lg font-bold">Easy Returns</h3>
                <p className="mt-2 font-normal text-subsec text-justify">Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo. </p>
            </div>
            


          
        </div>
    </section>
  );
};

export default WhyChooseUs;
