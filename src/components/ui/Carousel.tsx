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
import { DoubbleQuoteIcon } from "../icons/SvgIcons";

register();

const UserTestimonialsData = [
  {
    name: "Pierre Martin",
    profilPicture: "/user1.webp",
    job: "Managing Director of ABC Mode",
    testimonial:
      "Sorayia has transformed our marketing approach. Their 3D virtual influencers have created a unique experience for our customers, allowing us to better understand their needs and increase our impact on the market.",
  },
  {
    name: "Marie Dupont",
    profilPicture: "/user2.webp",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. The 3D avatars have allowed us to improve our customer engagement and boost our sales significantly.",
  },
  {
    name: "FOYTH Gill",
    profilPicture: "/user3.webp",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. our customer engagement and boost our sales significantly.",
  },
  {
    name: "Pierre Martin",
    profilPicture: "/user1.webp",
    job: "Managing Director of ABC Mode",
    testimonial:
      "Sorayia has transformed our marketing approach. Their 3D virtual influencers have created a unique experience for our customers, allowing us to better understand their needs and increase our impact on the market.",
  },
  {
    name: "Marie Dupont",
    profilPicture: "/user2.webp",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. The 3D avatars have allowed us to improve our customer engagement and boost our sales significantly.",
  },
  {
    name: "FOYTH Gill",
    profilPicture: "/user3.webp",
    job: "Marketing Manager at XYZ Solutions",
    testimonial:
      "Thanks to Sorayia, our customer interactions have become more personalized and compelling. our customer engagement and boost our sales significantly.",
  },
];

const testimonialCards = UserTestimonialsData.map((User, index) => (
  <SwiperSlide key={index}>
    <div className="flex flex-col justify-evenly gap-9 p-5 bg-gray-300 w-[400px] h-[400px] rounded shadow-100 border-shadowColor">
      <div className="text-left">
        <DoubbleQuoteIcon width={35} height={35} fill="#ffffff" />
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
    <div className="relative w-[800px] h-full py-8 translate-y-[3%] -left-[35%] top-10 pl-[34px]">
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
