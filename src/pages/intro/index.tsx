import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { INTRO_SLIDERS } from 'data/intro';
import Slider from 'components/Intro/Slider';

const IntroPage = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={false}>
      {
        INTRO_SLIDERS.map((slider, index) => (
          <Slider {...slider} key={index} />
        ))
      }
    </Carousel>
  );
}

export default IntroPage;