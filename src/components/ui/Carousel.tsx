"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavigationBtn } from "./CustumsBtn";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

register();

const UserTestimonialsData = [
  {
    name: "Pierre Martin",
    profilPicture: "/user1.png",
    job: "Managing Director of ABC Mode",
    testimonial:
      "Sorayia has transformed our marketing approach. Their 3D virtual influencers have created a unique experience for our customers, allowing us to better understand their needs and increase our impact on the market.",
  },
  {
    name: "Marie Dupont",
    profilPicture: "/user2.png",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. The 3D avatars have allowed us to improve our customer engagement and boost our sales significantly.",
  },
  {
    name: "FOYTH Gill",
    profilPicture: "/user3.png",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. our customer engagement and boost our sales significantly.",
  },
  {
    name: "Pierre Martin",
    profilPicture: "/user1.png",
    job: "Managing Director of ABC Mode",
    testimonial:
      "Sorayia has transformed our marketing approach. Their 3D virtual influencers have created a unique experience for our customers, allowing us to better understand their needs and increase our impact on the market.",
  },
  {
    name: "Marie Dupont",
    profilPicture: "/user2.png",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. The 3D avatars have allowed us to improve our customer engagement and boost our sales significantly.",
  },
  {
    name: "FOYTH Gill",
    profilPicture: "/user3.png",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. our customer engagement and boost our sales significantly.",
  },
];


const testimonialCards = UserTestimonialsData.map((User, index) => (
  <SwiperSlide key={index}>
    <div className="flex flex-col justify-evenly gap-9 p-5 bg-gray-300 w-[400px] h-[400px] rounded shadow-100 border-shadowColor">
      <div className="text-left">
        <svg
          width={35}
          height={35}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.32 17.28a1.2 1.2 0 0 0 1.2-1.2v-2.93a1.2 1.2 0 0 0-1.2-1.2h-1.666c0-.421.025-.843.075-1.265.074-.446.199-.843.372-1.19.174-.348.397-.62.67-.82.273-.223.62-.335 1.042-.335V6.48c-.695 0-1.302.15-1.824.447a3.987 3.987 0 0 0-1.302 1.19 5.912 5.912 0 0 0-.744 1.75 9.256 9.256 0 0 0-.223 2.083v4.13a1.2 1.2 0 0 0 1.2 1.2h2.4Zm-7.2 0a1.2 1.2 0 0 0 1.2-1.2v-2.93a1.2 1.2 0 0 0-1.2-1.2H7.454c0-.421.025-.843.075-1.265.074-.446.199-.843.372-1.19.174-.348.397-.62.67-.82.273-.223.62-.335 1.042-.335V6.48c-.695 0-1.302.15-1.824.447a3.986 3.986 0 0 0-1.302 1.19 5.912 5.912 0 0 0-.744 1.75 9.254 9.254 0 0 0-.223 2.083v4.13a1.2 1.2 0 0 0 1.2 1.2h2.4Z" />
        </svg>
      </div>
      <div>
        <p className="text-center text-2xl text-white">{`"${User.testimonial}"`}</p>
      </div>
      <div className="flex items-center w-full gap-3">
        <div>
          <Image src={User.profilPicture} alt="user" width={50} height={50} />
        </div>
        <div className="space-y-1">
          <h4 className="text-2xl-600 text-white">{User.name}</h4>
          <p className="text-white text-400">{User.job}</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
));


const Carousel = () => {
  return (
    <div className="relative w-[800px] h-full py-8 translate-y-[3%] -left-[35%] pl-[34px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={700}
        autoplay={{
          delay: 10000,
        }}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 150,
          depth: 130,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="relative py-6 min-h-[450px]"
      >

        {testimonialCards}

        <div className="slider-controler relative -bottom-6">
          <NavigationBtn className="swiper-button-prev !left-[3%]">
            <ChevronLeft size={19} className="text-gray-200" />
          </NavigationBtn>
          <NavigationBtn className="swiper-button-next !left-[11%]">
            <ChevronRight size={19} className="text-gray-200" />
          </NavigationBtn>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
