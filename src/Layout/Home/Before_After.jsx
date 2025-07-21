import beforeImg from "../../assets/Dental before after/Before image.jpg";
import afterImg from "../../assets/Dental before after/After image.jpg";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { HeadingH2 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";

export default function Before_After() {
  const FIRST_IMAGE = {
    imageUrl: beforeImg,
  };

  const SECOND_IMAGE = {
    imageUrl: afterImg,
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
        

      <div className="flex items-center text-center pb-10 flex-col justify-center">
        <HeadingH2 headH2={' Some samples of our work before and after'}></HeadingH2>
        <Line></Line>
      </div>
    

      <ReactBeforeSliderComponent
        secondImage={SECOND_IMAGE}
        firstImage={FIRST_IMAGE}
        
      />

     

    </div>
  );
}
