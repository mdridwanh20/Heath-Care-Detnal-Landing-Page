import React from "react";
import img1 from "../../assets/About us/About us img (1).webp";
import img2 from "../../assets/About us/About us img (2).webp";
import img3 from "../../assets/About us/About us img (3).webp";
import img4 from "../../assets/About us/About us img (4).webp";
import { Btn, HeadingH2, HeadingH3, Para } from "../Component/Share/Typography";

const AboutDental = () => {
  const aboutPoints = [
    {
      title: "Gentle care",
      description: "Our friendly team takes time to listen and ease any anxiety.",
    },
    {
      title: "Transparent pricing",
      description: "Clear estimates and flexible financing options.",
    },
    {
      title: "Proven results",
      description: "View real patient testimonials and smile transformations.",
    },
  ];

  const collageImages = [img1, img2, img3, img4];

  return (
    <section id="about" className="px-4 scroll-mt-20 py-10">
      {/* Heading */}
      <div className="lg:text-center mb-10">
        <HeadingH2 headH2="About Us" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
        {/* Image collage */}
        <div className="relative flex-shrink-0 w-full lg:w-1/2 h-auto mt-8 lg:mt-0 grid grid-cols-2 gap-4">
          {collageImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Dental care ${index + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-48 lg:h-52 xl:h-56"
            />
          ))}
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <HeadingH3 head3="We’ve Specialized in Dental Care for Over 25 Years" />

          <Para para="For over a quarter-century, our compassionate team has helped thousands of patients achieve healthier, more confident smiles through personalized, modern dental care." />

          <Para para="We combine advanced dental technology with gentle techniques—making every visit calm, comfortable, and effective. From routine check‑ups and restorative treatments to cosmetic enhancements like whitening and veneers, you’re in experienced, caring hands." />

          <p className="text-[var(--paraColor)] mb-6 leading-relaxed">
            <strong>What our patients appreciate:</strong>
          </p>

          <ul className="list-disc list-inside text-[var(--paraColor)] mb-6 space-y-2">
            {aboutPoints.map((pt, i) => (
              <li key={i}>
                <strong>{pt.title}:</strong> {pt.description}
              </li>
            ))}
          </ul>

          <Btn btn="Schedule Your Consultation" />
        </div>
      </div>
    </section>
  );
};

export default AboutDental;
