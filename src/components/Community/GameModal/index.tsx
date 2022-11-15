import React, { useEffect, useState } from "react";
import { CloseIcon } from "../../icons";
import { Rnd } from 'react-rnd'

type GameModalType = {
  closeFunc: Function;
  title: string
  websiteUrl: string;
}

const GameModal = (props: GameModalType) => {

  const [status, setStatus] = useState<any>({});

  useEffect(() => {
    const innerWidth = (window as any).innerWidth
    const innerHeight = (window as any).innerHeight

    const defaultStatus = {
      width: innerHeight * 85 / 100 * 16 / 9,
      height: innerHeight * 85 / 100,
      x: (innerWidth - (innerHeight * 85 / 100 * 16 / 9)) / 2,
      y: innerHeight * (100 - 85) / 100 / 2
    };

    setStatus(defaultStatus);
  }, []);

  const enabledResizing = {
    bottom: false,
    bottomLeft: true,
    bottomRight: true,
    left: false,
    right: false,
    top: false,
    topLeft: true,
    topRight: true,
  }

  const closeDlg = (e) => {
    if (e.target.id == "room_setting_dlg") {
      const innerWidth = (window as any).innerWidth
      const innerHeight = (window as any).innerHeight

      const defaultStatus = {
        width: innerHeight * 85 / 100 * 16 / 9,
        height: innerHeight * 85 / 100,
        x: (innerWidth - (innerHeight * 85 / 100 * 16 / 9)) / 2,
        y: innerHeight * (100 - 85) / 100 / 2
      };

      setStatus(defaultStatus)
      props.closeFunc();
    }
  };

  return (
    // <div
    //   className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
    //   id="room_setting_dlg"
    //   onClick={(e) => closeDlg(e)}
    // >
    //   <div
    //     className=" fixed md:w-[90%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
    //   >
    //     {/* Modal Header */}
    //     <div
    //       className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
    //       onClick={(e) => props.closeFunc()}
    //     >
    //       <CloseIcon />
    //     </div>
    //     <div className=" flex flex-row justify-between items-center ">
    //       <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
    //         {props.title}
    //       </div>
    //     </div>
    //     {/* Modal Content */}
    //     <iframe src={props.websiteUrl} frameBorder="0" className="w-full h-full"></iframe>
    //   </div>
    // </div>
    <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(12,12,14,0.7)] flex items-center justify-center z-[1001]'>
      <Rnd
        className='transition-none'
        size={{ width: status.width, height: status.height }}
        position={{ x: status.x, y: status.y }}
        onDragStop={(e, d) => { console.log(d); setStatus({ ...status, x: d.x, y: d.y }) }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setStatus({
            width: Number(ref.style.width),
            height: Number(ref.style.height),
            ...position,
          });
        }}
        lockAspectRatio={16 / 9}
        minHeight={'281'}
        maxHeight={'90vh'}
        minWidth={'500'}
        maxWidth={'90vw'}
        dragHandleClassName={`${'handleDraggling'}`}
        enableResizing={enabledResizing}
      >
        <div className={`modal-content w-[100%] h-[100%] flex flex-col relative bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] resize select-none ${'px-[10px] pb-[10px] pt-[30px]'}`}>
          <div className={`${'handleDraggling'} m-auto right-0 h-[30px] w-[95%] absolute top-0 left-0 z-[10000] rounded-[50px] overflow-hidden cursor-move`}></div>

          <div className="absolute top-[-27px] right-[-20px] cursor-pointer text-white" onClick={closeDlg}>
            <CloseIcon />
          </div>
        </div>
      </Rnd>
    </div>
  );
}

export default GameModal;