import React from "react";
import { HeadingH2, Para } from "../Component/Share/Typography";
import img1 from "../../assets/Staff/staff (1).jpg";
import img2 from "../../assets/Staff/staff (2).jpg";
import img3 from "../../assets/Staff/staff (3).jpg";
import { FaLink } from "react-icons/fa";

export default function Staff() {
  const staffImg = [
    {
      id: 1,
      image: img1,
      doctorName: "Dr. Sarah Malik",
      title: "Oral Surgeon",
    },
    { id: 2, image: img2, doctorName: "Dr. James Lee", title: "Orthodontist" },
    {
      id: 3,
      image: img3,
      doctorName: "Dr. Nila Rahman",
      title: "Pediatric Dentist",
    },
  ];

  return (
    <div className="py-12 pb-16 px-4 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center flex items-center justify-center flex-col  mb-10">
        <HeadingH2 headH2="Professional Staff" />

       <div className="lg:w-1/2">
         <Para className={'text-center'} para="Meet our experienced and compassionate dental professionals who are committed to providing you with the highest quality care in a comfortable environment." />
       </div>

      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffImg.map((staff) => (
          <div
            key={staff.id}
            className="bg-white relative rounded-md overflow-hidden text-center "
          >
            <img
              src={staff.image}
              alt={staff.doctorName}
              className="w-full h-[320px] object-cover"
            />

            <div className="absolute  bottom-0 w-full p-5 bg-blue-800/60  text-white">
              <div>
                <h3 className="text-xl font-semibold ">{staff.doctorName}</h3>
                <p className="text-sm ">{staff.title}</p>
              </div>
            </div>

            <div className="absolute top-5 right-5 text-xl text-[var(--primaryColor)] animate-pulse">
                <button>
                  <FaLink />
                </button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}
