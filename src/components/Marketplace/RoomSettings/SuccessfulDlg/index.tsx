import React from 'react'
import { PrimaryButton } from "components/Common/Buttons"
import { UpArrow } from "components/icons"
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { SuccessIcon } from 'components/icons/SuccessIcon'

interface SuccessfulDlgProps {
  dlgToggle: boolean;
  setDlgToggle: any;
}

function SuccessfulDlg(props: SuccessfulDlgProps) {

  const closeDlg = (e) => {
    if (e.target.id == "successful_dlg") {
      props.setDlgToggle(false)
    }
  }

  return (
    <div className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px]
                        backdrop-blur-[20px] bg-[rgba(12,12,14,0.7)]
                        z-[1004] ${props.dlgToggle === true ? "fixed" : "hidden"} `} id="successful_dlg" onClick={(e) => closeDlg(e)}>
      <div className=" fixed lg:w-[396px] md:w-[396px] sm:w-full xs:w-full h-[621px] bg-[#131314] md:border-[1px] xs:border-t-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[64px] px-[40px] pb-[40px] gap-[40px] overscroll-contain">
        <div className=" absolute md:right-[-18px] md:top-[-18px] cursor-pointer md:transform-none xs:right-1/2 xs:transform xs:translate-x-1/2 xs:top-[-50px]" onClick={() => props.setDlgToggle(false)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9564 11.866L8.09082 7.00022L12.9565 2.13448C13.2581 1.83285 13.2581 1.34522 12.9565 1.04359C12.6548 0.741963 12.1672 0.741963 11.8656 1.04359L6.99995 5.90933L2.13428 1.04359C1.83265 0.741963 1.34503 0.741963 1.04341 1.04359C0.741781 1.34522 0.741781 1.83285 1.04341 2.13448L5.90905 7.00022L1.04341 11.866C0.741781 12.1676 0.741781 12.6552 1.04341 12.9568C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1072 2.13428 12.9568L2.09892 12.9215L2.13428 12.9568L6.99993 8.09111L11.8656 12.9568C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1072 12.9564 12.9568L12.9211 12.9215L12.9564 12.9568C13.2581 12.6552 13.2581 12.1676 12.9564 11.866Z" fill="#5F5F63" stroke="#5F5F63" stroke-width="0.1" />
          </svg>
        </div>
        <div className='flex flex-col items-center'>
          <div className="flex cursor-pointer w-[120px] h-[120px] rounded-[46.9px] border-[#272829] border-[2px] items-center justify-center bg-globalBgColor">
            <SuccessIcon />
          </div>
          <div className='text-[28px] font-[500] font-["outfit"] text-white mt-[49px]'>
            Successful created!
          </div>
          <div className='text-[#B3B3B7] text-[16px] font-["outfit"] font-[400] mt-[16px] text-center'>
            You can find your room in the list of rooms in your profile
          </div>
          <div className="w-full mt-[40px]">
            <button className="w-full font-medium py-[16px] rounded-[15px] border-primary border-[1.2px] text-[#29B080] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center">
              <span>Copy link</span>
            </button>
          </div>
          <div className="w-full mt-[24px]">
            <button className="w-full font-medium py-[16px] rounded-[15px] text-white h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary">
              <span>Share on twitter</span>
            </button>
          </div>
          <div className="w-full mt-[24px]">
            <button className="w-full font-medium py-[16px] rounded-[15px] text-white h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary">
              <span>Share on discord</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SuccessfulDlg