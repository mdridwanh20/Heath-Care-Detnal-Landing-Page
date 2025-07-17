import { Swiper, SwiperSlide } from "swiper/react";
import { Btn, HeadingH1, Para } from "../Component/Share/Typography";
import { Navigation, Pagination } from "swiper/modules";

import img1 from "../../assets/Hero section image/dental image (1).webp";
import img2 from "../../assets/Hero section image/dental image (2).webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function HeroSection() {
  const dentalData = [
    {
      id: 1,
      title: "Quality Dental Care",
      description:
        "Experience gentle, modern dental treatments from our expert team dedicated to your long-term oral health and a confident smile.",
      buttonText: "Our Services",
      image: img1,
    },
    {
      id: 2,
      title: "Expert Care, Always",
      description:
        "From preventive checkups to advanced procedures, we combine the latest technology with compassionate care for all ages.",
      buttonText: "Book Appointment",
      image: img2,
    },
  ];

  return (
    <div id="home" className="h-screen relative mt-28">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        loop={true}

      >
        {dentalData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative z-10">
              <img
                className="w-full h-[600px] object-cover"
                src={item.image}
                alt=""
              />

              <div className="absolute space-y-2 px-3 top-80 lg:left-26 -translate-y-25 ">
                <HeadingH1 headH1={`${item.title}`} className={" "}></HeadingH1>
                <p className="lg:w-[600px] text-[var(--paraColor)]">
                  {" "}
                  {item.description}{" "}
                </p>

                <div className="my-4">
                  <Btn btn={`${item.buttonText}`}></Btn>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex items-center lg:right-0 -right-55 lg:justify-between top-96 lg:top-1/2 z-10 w-full px-3 absolute">

          <div className="custom-swiper-button-next me-5 text-[var(--lightColor)] shadow-md cursor-pointer rounded-full p-2 bg-blue-500/70">
            <AiOutlineLeft className="text-2xl" />
          </div>

          <div className="custom-swiper-button-prev z-10 text-[var(--lightColor)] shadow-md cursor-pointer rounded-full p-2 bg-blue-500/70">
            <AiOutlineRight className="text-2xl" />
          </div>

        </div>
      </Swiper>
    </div>
  );
}
