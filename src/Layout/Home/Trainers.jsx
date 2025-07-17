import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { HeadingH2 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";

// ✅ Image imports
import img1 from "../../assets/trainer image/fitness couch (1).webp";
import img2 from "../../assets/trainer image/fitness couch (2).webp";
import img3 from "../../assets/trainer image/fitness couch (3).webp";
import img4 from "../../assets/trainer image/fitness couch (4).webp";

export default function Trainers() {
  // ✅ Fixed trainer JSON data
  const trainers = [
    {
      id: 1,
      name: "Amaryan Jackson",
      role: "Body Builder",
      image: img1,
      description:
        "With 8+ years in bodybuilding, Amaryan helps clients build muscle, strength, and confidence through tailored workout plans and expert guidance.",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
      },
    },
    {
      id: 2,
      name: "Sophia Khan",
      role: "Fitness Coach",
      image: img2,
      description:
        "Certified fitness coach empowering women and men to achieve fat loss and improved mobility with sustainable, results-driven training programs.",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
      },
    },
    {
      id: 3,
      name: "Liam Rodriguez",
      role: "Strength Trainer",
      image: img3,
      description:
        "Liam brings high-performance strength training for athletes and beginners alike—focused on power, performance, and injury prevention.",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
      },
    },
    {
      id: 4,
      name: "Emily Rivera",
      role: "Yoga & Flexibility Coach",
      image: img4,
      description:
        "Emily helps clients improve flexibility, reduce stress, and enhance core strength through dynamic yoga and recovery sessions.",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
      },
    },
  ];

  // ✅ Reusable card component
  const TrainerCard = ({ name, role, image, description, socials }) => (
    <div className="bg-[var(--cardBodyColor)] border border-gray-800 text-[var(--lightColor)] flex flex-col md:flex-row w-full max-w-4xl shadow-md overflow-hidden rounded">
      {/* Image section */}
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col justify-center md:w-1/2">
        <h3 className="text-[var(--primaryColor)] font-bold text-lg uppercase">
          {name}
        </h3>
        <p className="text-sm font-semibold uppercase mb-4">{role}</p>
        <p className="text-[15px] text-gray-400 leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex space-x-4">
          <a
            href={socials.facebook}
            className="w-8 h-8 bg-[var(--cardLightBodyColor)] hover:bg-[var(--primaryColor)] transition rounded flex items-center justify-center text-sm"
          >
            <FaFacebookF />
          </a>
          <a
            href={socials.twitter}
            className="w-8 h-8 bg-[var(--cardLightBodyColor)] hover:bg-[var(--primaryColor)] transition rounded flex items-center justify-center text-sm"
          >
            <FaTwitter />
          </a>
          <a
            href={socials.google}
            className="w-8 h-8 bg-[var(--cardLightBodyColor)] hover:bg-[var(--primaryColor)] transition rounded flex items-center justify-center text-sm"
          >
            <FaGooglePlusG />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div id="trainer" className="py-10  scroll-mt-15">
      {/* Section Header */}
      <div className="flex items-center justify-center flex-col">
        <HeadingH2
          headH2={"our trainers"}
          className={"uppercase text-[var(--primaryColor)]"}
        />
        <Line />
      </div>

      {/* Trainer Cards */}
      <div className="py-14  flex flex-col items-center gap-10">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} {...trainer} />
        ))}
      </div>

    </div>
  );
}
