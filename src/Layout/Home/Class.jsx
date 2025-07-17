import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import img1 from "../../assets/class image/class1.jpg";
import img2 from "../../assets/class image/class2.jpg";
import img3 from "../../assets/class image/class3.jpg";
import { HeadingH2, HeadingH3 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";

const classData = [
  {
    title: "Body Building",
    price: "$100 / Month",
    schedule: {
      days: "Mon - Fri",
      time: "9:00 - 10:00",
    },
    trainer: "Austin Jane",
    description:
      "Build strength, gain muscle, and push your limits with our expert-led bodybuilding sessions. Perfect for all fitness levels.",
    image: img1,
    iconColor: "text-[var(--primaryColor)]",
  },
  {
    title: "Yoga Flow",
    price: "$80 / Month",
    schedule: {
      days: "Tue & Thu",
      time: "6:00 - 7:00 AM",
    },
    trainer: "Sophia Lee",
    description:
      "Improve flexibility, focus, and inner peace with our calming and energizing yoga flow classes led by certified instructors.",
    image: img2,
    iconColor: "text-[var(--primaryColor)]",
  },
  {
    title: "CrossFit Challenge",
    price: "$120 / Month",
    schedule: {
      days: "Mon - Sat",
      time: "7:00 - 8:00 PM",
    },
    trainer: "Max Turner",
    description:
      "Push your limits with high-intensity functional training. Build strength, endurance, and agility in our CrossFit Challenge sessions.",
    image: img3,
    iconColor: "text-[var(--primaryColor)]",
  },
];

const Class = () => {
  return (
    <div id="class" className="py-10 scroll-mt-20 ">

      <div className="py-5 text-center">
        <HeadingH2
          headH2={"popular classis"}
          className={"uppercase text-[var(--primaryColor)]"}
        ></HeadingH2>
        <Line></Line>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {classData.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--cardBodyColor)] text-[var(--primaryColor)] rounded-md shadow-lg overflow-hidden border border-gray-900"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full  object-cover"
            />

            <div className="p-5 space-y-3">
              <p className="text-sm text-gray-300 font-bold">{item.price}</p>

              <HeadingH3
                head3={item.title}
                className="text-[var(--primaryColor)]"
              />

              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FaCalendarAlt className={item.iconColor} />
                <span>
                  {item.schedule.days} | {item.schedule.time}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FaUser className={item.iconColor} />
                <span>{item.trainer}</span>
              </div>

              <p className="text-gray-400 text-sm mt-3">
                {item.description.slice(0, 100)}...
              </p>

              <div className="text-right">
                <span className="text-[var(--primaryColor)] text-lg cursor-pointer hover:underline">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
