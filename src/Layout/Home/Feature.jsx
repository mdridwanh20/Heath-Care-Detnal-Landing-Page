import React from "react";
import { HeadingH2, HeadingH3, Para } from "../Component/Share/Typography";
import img1 from "../../assets/Feature img/Feature img (1).jpg";
import img2 from "../../assets/Feature img/Feature img (2).jpg";
import img3 from "../../assets/Feature img/Feature img (3).jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Feature() {
  // JSON Feature Data
  const featureData = [
    {
      id: 1,
      title: "Advanced Dental Equipment",
      description:
        "We use the latest digital imaging, 3D scanning, and pain-free laser tools to ensure precise and comfortable treatments.",
      img: img1,
    },
    {
      id: 2,
      title: "Emergency Dental Services",
      description:
        "Fast, reliable care when you need it most — including toothaches, broken teeth, and urgent gum issues.",
      img: img2,
    },
    {
      id: 3,
      title: "Personalized Smile Makeovers",
      description:
        "Transform your smile with whitening, veneers, and cosmetic bonding tailored to your unique facial features.",
      img: img3,
    },
    {
      id: 4,
      title: "Personalized Smile Makeovers",
      description:
        "Transform your smile with whitening, veneers, and cosmetic bonding tailored to your unique facial features.",
      img: img2,
    },
    {
      id: 5,
      title: "Personalized Smile Makeovers",
      description:
        "Transform your smile with whitening, veneers, and cosmetic bonding tailored to your unique facial features.",
      img: img1,
    },
  ];

  return (
    <div className="relative">
      <div className="pt-5 pb-3 lg:pb-8">
        <HeadingH2 headH2={"Feature"} className={"lg:text-center "}></HeadingH2>
      </div>

      <div className="">
        <Swiper
          navigation={{
            nextEl: ".navigate-next",
            prevEl: ".navigate-prev",
          }}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featureData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="p-5 border border-[var(--borderColor)] shadow-md rounded-md bg-[var(--cardBodyColor)] "
            >
              <div className="lg:flex   flex-col h-[390px] lg:h-[420px]  ">
                <img
                  className="w-full rounded-md pb-4 "
                  src={item.img}
                  alt=""
                />
                <HeadingH3 head3={`${item.title}`}></HeadingH3>
                <Para para={`${item.description}`}></Para>
              </div>
            </SwiperSlide>
          ))}

          <div className="w-full  absolute bottom-10 lg:bottom-5 z-20">

            <div className="flex items-center gap-5 px-5 justify-between  ">

              <div className="navigate-next text-[var(--primaryColor)] flex items-center justify-center rounded-full p-1 bg-white shadow-md">
                <button className="text-3xl">
                  <IoIosArrowRoundBack />
                </button>
              </div>

              <div className="navigate-prev text-[var(--primaryColor)] flex items-center justify-center rounded-full p-1 bg-white shadow-md">
                <button className="text-3xl">
                  <IoIosArrowRoundForward />
                </button>
                
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
