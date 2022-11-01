import React from "react";
import { Carousel } from 'react-responsive-carousel';

const IntroPage = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={false}>
      <div className="h-[100vh]">
        <img src="images/intro/slides/rooms.png" />
        <div className="p-12">
          <h2 className="text-[25px] font-[700] title-color pb-4">ROOMS</h2>
          <p className="center text-[15px] font-[500] title-color">
            Virtual Experiences for your friends and communities.<br /><br /> Click the room and try the demo.
          </p>
        </div>
      </div>
      <div>
        <img src="images/experience/room_images/room_2_avatar_lg.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/experience/room_images/room_2_avatar_lg.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/experience/room_images/room_2_avatar_lg.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/experience/room_images/room_2_avatar_lg.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
}

export default IntroPage;