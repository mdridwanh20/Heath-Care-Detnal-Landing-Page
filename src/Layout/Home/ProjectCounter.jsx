import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaBriefcase, FaCheckCircle, FaTrophy, FaUsers } from "react-icons/fa";
import SlotCounter from "react-slot-counter";
import { HeadingH3 } from "../Component/Share/Typography";

export default function ProjectCounter() {
  const statsData = [
    {
      id: 1,
      icon: <FaUsers />,
      value: "256K",
      label: "Members",
    },
    {
      id: 2,
      icon: <FaCheckCircle />,
      value: "48K",
      label: "Trainers",
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      value: "25+",
      label: "Classis",
    },
    {
      id: 4,
      icon: <FaTrophy />,
      value: "10+",
      label: "Best Awards",
    },
  ];

  return (
    <section className=" text-white  py-10">

      <div className="lg:px-10 grid grid-cols-2 gap-8 lg:grid-cols-4 ">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="text-[var(--lightColor)] flex justify-between    space-y-1"
          >
            <div className="flex p-5 bg-[var(--cardBodyColor)] border border-gray-700 rounded flex-col w-full space-y-1 items-center">
              <button className="text-[28px] lg:text-[50px] text-[var(--primaryColor)]"> {item.icon} </button>

              <button className="text-xl  lg:text-5xl font-bold"><SlotCounter value={item.value} ></SlotCounter></button>

              <HeadingH3 head3={`${item.label}`}></HeadingH3>
            </div>

          </div>
        ))}
      </div>


    </section>
  );
}
