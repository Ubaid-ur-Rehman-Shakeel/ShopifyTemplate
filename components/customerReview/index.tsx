'use client';
import { StarIcon } from '@heroicons/react/20/solid';
import { reviewData } from 'data';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function generateStarRatingArray(rating: number) {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(i <= rating ? 'orange' : 'gray');
  }
  return ratings;
}

const CustomerReview = () => {
  return (
    <section>
      <div className="bg-gray-100 py-10">
        <div className="text-center">
          <h3 className="mb-6 text-3xl font-bold">Customer Reviews </h3>
        </div>

        <div className="gap-6 px-12 text-center md:grid-cols-3 lg:gap-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 20,
              modifier: 1,
              slideShadows: false
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              dynamicBullets: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviewData.map((item) => (
              <SwiperSlide>
                <div className="rounded-xl bg-white p-6 shadow-md" key={item.id}>
                  <div className="mb-6 flex justify-center">
                    <img src={item.image} className="h-32 w-32 rounded-full shadow-lg" />
                  </div>
                  <h5 className="text-xl font-semibold text-main">{item.name}</h5>
                  <h6 className="mb-4 font-semibold">{item.deignation}</h6>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    {item.message}
                  </p>
                  <div className="mt-2 flex justify-center">
                    {generateStarRatingArray(item.rating).map((color, index) => (
                      <StarIcon
                        key={index}
                        className={classNames(
                          color === 'orange' ? 'text-orange-400' : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
