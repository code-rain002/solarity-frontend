import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { INTRO_SLIDERS } from 'data/Intro';
import Slider from 'components/Intro/Slider';

const SlidersPage = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={false} >
      {
        INTRO_SLIDERS.map((slider, index) => (
          <Slider {...slider} key={index} />
        ))
      }
    </Carousel>
  );
}
export default SlidersPage;