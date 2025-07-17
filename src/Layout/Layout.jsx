import React from "react";
import Home from "./Home/Home";
import Top_Navbar from "./Component/Share/Top_Navbar";
import Navbar from "./Component/Share/Navbar";
import HeroSection from "./Home/HeroSection";
import GymTime from "./Home/GymTime";
import OurStory from "./Home/Ourstory";
import Class from "./Home/Class";
import Offer_Banner from "./Home/Offer_Banner";
import Advantages from "./Home/Advantages";
import ProjectCounter from "./Home/ProjectCounter";
import Trainers from "./Home/Trainers";
import PromoBanner from "./Home/PromoBanner";
import Success from "./Home/Success";
import Contact from "./Home/Contact";
import Footer from "./Component/Share/Footer";
import PricingTable from "./Home/PricingTable";

export default function Layout() {
  return (
    <div class="relative">
      <div class="absolute inset-0">
        
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-0 [&>div]:-z-10 [&>div]:m-auto [&>div]:h-[310px] [&>div]:w-[310px] [&>div]:rounded-full [&>div]:bg-fuchsia-400 [&>div]:opacity-20 [&>div]:blur-[100px]">
          <div></div>
        </div>

      </div>

      {/* content here */}

      <div className="relative z-[2]">
        <div>
          <Top_Navbar></Top_Navbar>
        </div>

        <div className="mt-11 ">
          <Navbar></Navbar>
        </div>

        <div>
          <HeroSection></HeroSection>
        </div>

        <div className="container m-auto px-4 pb-15">
          <GymTime></GymTime>
          <OurStory></OurStory>
          <Class></Class>
          <Offer_Banner></Offer_Banner>
          <Advantages></Advantages>
          <ProjectCounter></ProjectCounter>
          <Trainers></Trainers>
          <PromoBanner></PromoBanner>
          <Success></Success>
          <PricingTable></PricingTable>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
