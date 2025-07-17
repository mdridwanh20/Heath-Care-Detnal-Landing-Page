import React from "react";
import offerImg  from '../../assets/offer-img.png'


import {
  Btn,
  HeadingH1,
  HeadingH3,
  HeadingH4,
  Para,
} from "../Component/Share/Typography";

export default function Offer_Banner() {
  return (
    <section className="bg-[var(--cardBodyColor)]  lg:pt-10 lg:pb-0 py-10 text-white px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10">
      
      {/* Left Image */}
      <div className="flex-1">
        {/* Add image here when needed */}
        <img src={offerImg} alt="Gym Offer" className="max-w-full h-auto" />
      </div>

      {/* Right Content */}
      <div className="flex-1 md:text-left  lg:space-y-4">
        <HeadingH3 className={'text-[var(--lightColor)]'} head3="Special Offer At Gym" />

        <HeadingH1 headH1="30% OFF"  className={'text-[var(--lightColor)]'}/>

        <HeadingH3 head3="With 2 Annual Package" className={'text-[var(--lightColor)]'} />

        <HeadingH4
          head4="Limited Time Only"
          className="text-[var(--primaryColor)]"
        />

        <Para para="Join now and transform your body with expert trainers, modern equipment, and a supportive community. Achieve your fitness goals faster and feel stronger every day." className={''} />

        <div className="py-2">
         <button> <Btn btn="Join now" /></button>
        </div>

      </div>
    </section>
  );
}
