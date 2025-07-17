import React from "react";
import img1 from "../../assets/gym time image/gym time image (1).webp";
import img2 from "../../assets/gym time image/gym time image (2).webp";
import img3 from "../../assets/gym time image/gym time image (3).webp";
import { Btn, HeadingH2 } from "../Component/Share/Typography";
import { GoArrowUpRight } from "react-icons/go";

export default function GymTime() {
  // Sample gym schedule
  const schedules = [
    {
      image: img1,
      day: "Monday",
      time: "6:30 AM",
      focus: "Chest & Triceps",
    },
    {
      image: img2,
      day: "Wednesday",
      time: "6:00 AM",
      focus: "Cardio + Core",
    },
    {
      image: img3,
      day: "Friday",
      time: "7:00 AM",
      focus: "Shoulders + HIIT",
    },
  ];

  return (
    <div className=" mb-10 mx-auto">
      <HeadingH2
        headH2={"Weekly Gym Time"}
        className={"pt-12 pb-5 lg:pb-8 text-[var(--primaryColor)] text-center"}
      ></HeadingH2>


      <div className="grid gap-3 md:grid-cols-3">

        {schedules.map((item, index) => (

          <div className="border border-gray-700 bg-[var(--cardBodyColor)] rounded-md shadow-md p-5">

            <div
            key={index}
            className="card text-[var(--lightColor)]"
          >

            <figure>
              <img
                src={item.image}
                alt={item.focus}
                className="h-48 rounded w-full object-cover"
              />
            </figure>
            <div className=" py-4 space-y-1">
              <h3 className="card-title">
                {item.day} - {item.time}
              </h3>
              <p className="">{item.focus}</p>

              <div className="card-actions  mt-4">
                <Btn btn={"JOIN NOW"} className={'border-0 bg-[var(--primaryColor)]  text-[var(--deepColor)]! font-bold! lg:text-[15px] '} icon={<GoArrowUpRight />}></Btn>
              </div>

            </div>

          </div>


          </div>


        ))}
      </div>
    </div>
  );
}
