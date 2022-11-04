import React, { useEffect, useRef } from 'react'

function WeeklyMovement({ id }) {

  const canvasRef = useRef(null);

  const draw = context => {
    var imageObj1 = new Image();

    imageObj1.onload = function () {
      context.drawImage(imageObj1, 42, 140);
    };
    imageObj1.src = '/images/community/back.png'

    var imageObj2 = new Image();

    imageObj2.onload = function () {
      context.drawImage(imageObj2, 0, 0);
    };
    imageObj2.src = '/images/community/Prices.png'

    var imageObj3 = new Image();

    imageObj3.onload = function () {
      context.drawImage(imageObj3, 42, 0);
    };
    imageObj3.src = '/images/community/Line 87.png'

    var imageObj4 = new Image();

    imageObj4.onload = function () {
      context.drawImage(imageObj4, 42, 160);
    };
    imageObj4.src = '/images/community/Line 91.png'

    var imageObj5 = new Image();

    imageObj5.onload = function () {
      context.drawImage(imageObj5, 26, 176);
    };
    imageObj5.src = '/images/community/03.06.png'

    var imageObj6 = new Image();

    imageObj6.onload = function () {
      context.drawImage(imageObj6, 238, 176);
    };
    imageObj6.src = '/images/community/29.05.png'

    var imageObj7 = new Image();

    imageObj7.onload = function () {
      context.drawImage(imageObj7, 254, 160);
    };
    imageObj7.src = '/images/community/Line 92.png'

    var imageObj8 = new Image();

    imageObj8.onload = function () {
      context.drawImage(imageObj8, 42, 8);
      context.drawImage(imageObj8, 42, 59.33);
      context.drawImage(imageObj8, 42, 110.66);
    };
    imageObj8.src = '/images/community/Line 88.png'



    context.beginPath();
    context.moveTo(42, 140);
    context.lineWidth = 3;
    context.fillStyle = '#29B08008';
    context.strokeStyle = '#29B080';
    context.bezierCurveTo(62, 135, 72, 125, 82, 120);
    context.bezierCurveTo(92, 115, 102, 85, 132, 130);
    context.bezierCurveTo(142, 115, 172, -60, 192, 140);
    context.bezierCurveTo(202, 115, 212, 135, 222, 130);
    context.bezierCurveTo(242, 115, 272, 135, 300, 130);
    context.bezierCurveTo(320, 40, 360, 20, 400, -65);
    context.bezierCurveTo(410, 140, 410, 140, 410, 140);
    // context.quadraticCurveTo(62, 135, 72, 125);
    // context.quadraticCurveTo(72, 125, 82, 120);
    // context.quadraticCurveTo(82, 120, 92, 115);
    // context.quadraticCurveTo(92, 115, 102, 85);
    // context.quadraticCurveTo(102, 85, 132, 130);
    // context.quadraticCurveTo(132, 130, 100, 115);
    // context.quadraticCurveTo(92, 115, 92, 115);
    // context.quadraticCurveTo(82, 120, 92, 115);
    // context.quadraticCurveTo(82, 120, 92, 115);
    context.fill();
    context.stroke();
    var imageObj9 = new Image();

    imageObj9.onload = function () {
      context.drawImage(imageObj9, 42, 118);
    };
    imageObj9.src = '/images/community/frame.png'
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context)
  }, [draw]);

  return (
    <div className='flex flex-col h-[285px] rounded-[20px] bg-[#19191A] pt-[24px] px-[24px] pb-[20px]'>
      <div className='text-[20px] text-[#F3F3F3] font-["outfit"] font-[500]'>Movement of the floor price</div>
      <div className='mt-[24px] w-full h-full relative flex justify-center'>
        <canvas height={250} width={335} ref={canvasRef} />
        <div className='absolute right-0 top-[0px] w-[109px] h-[180px] bg-gradient-to-r from-transparent to-[#19191A]'></div>
      </div>

    </div>
  )
}

export default WeeklyMovement