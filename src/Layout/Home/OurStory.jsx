import React from "react";
import { HeadingH2, HeadingH3, HeadingH4, Para } from "../Component/Share/Typography";
import { FaDoorOpen, FaShieldAlt, FaUserTie } from "react-icons/fa";
import Line from "../Component/Share/Line";

const OurStory = () => {
  const features = [
    {
      title: "OPEN DOOR POLICY",
      description:
        "Join our inclusive community. Everyone is welcome to train and grow with us at any level.",
      icon: <FaDoorOpen className="w-13 h-13 text-[var(--primaryColor)]" />,
    },
    {
      title: "FULLY INSURED",
      description:
        "Train with peace of mind. Our facility is fully insured for your safety and security.",
      icon: <FaShieldAlt className="w-13 h-13 text-[var(--primaryColor)]" />,
    },
    {
      title: "PERSONAL TRAINER",
      description:
        "Get expert guidance. Our certified trainers are here to help you achieve your fitness goals.",
      icon: <FaUserTie className="w-13 h-13 text-[var(--primaryColor)]" />,
    },
  ];

  return (
    <div id="aboutUs" className="bg-[var(--cardBodyColor)] scroll-mt-20 text-white py-16 flex items-center justify-center p-6">
      <div className="max-w-4xl">
        <HeadingH2
          headH2={"OUR STORY"}
          className={"text-[var(--primaryColor)] text-center"}
        />


          <Line></Line>

        <div className="border-t border-gray-600 my-4"></div>

        <div className="py-2 space-y-4">
          <Para
            para={
              "Welcome to our fitness journey! We are dedicated to transforming lives through strength, endurance, and wellness. Our mission has been the foundation of the fitness industry for years."
            }
            className={"text-[var(--lightColor)]"}
          />
          <Para
            para={
              "Our story began with a passion for fitness, evolving from a small gym to a community hub. We've endured challenges, adapted to new training methods, and remained a leader in the fitness world."
            }
            className={"text-[var(--lightColor)]"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {item.icon}
              <div>
                <HeadingH3
                  head3={`${item.title}`}
                  className={"text-[var(--primaryColor)]"}
                ></HeadingH3>
                <p className="text-gray-400 text-[13px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
