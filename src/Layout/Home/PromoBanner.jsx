import React from "react";
import {
  Btn,
  HeadingH1,
  HeadingH2,
  HeadingH3,
  Para,
} from "../Component/Share/Typography";

export default function PromoBanner() {
  return (
    <section className="bg-[var(--primaryColor)] rounded shadow-2xl lg:flex items-center justify-between text-[var(--deepColor)] py-20 px-6 md:px-24 ">

      <div className=" ">
        <HeadingH2
          headH2={"Join this month"}
          className={"uppercase "}
        ></HeadingH2>
        <HeadingH1 headH1={"GET 2 MONTH FREE"} className={'lg:text-5xl!'}></HeadingH1>

        <Para
          para={
            "Start your transformation today. Get expert training, personalized plans, and real results—on us for 2 months!"
          }
          className={'text-[var(--deepColor)]!'}
        ></Para>

        
      </div>

<div className="flex items-center  my-5">
    <Btn btn={"join Today"} className={'text-[var(--deepColor)]! border-black! font-bold!'}></Btn>
</div>

    </section>
  );
}
