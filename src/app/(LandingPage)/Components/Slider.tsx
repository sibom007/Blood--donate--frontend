"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Blood1 from "@/assets/Blood 1.avif";
import Blood2 from "@/assets/blood 2.avif";
import Blood3 from "@/assets/blood 3.avif";

const Slider = () => {
  return (
    <div className="w-6/12 h-6/12 sm:mt-8 hidden sm:block">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image className="rounded-lg" src={Blood1} alt="Blood 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-lg" src={Blood2} alt="Blood 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-lg" src={Blood3} alt="Blood 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
