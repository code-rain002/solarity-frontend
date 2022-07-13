import Image from "next/image"
import React, {useState} from "react"
import SocialIcon from "../Common/SocialIcon"
import WalletBalanceIcon from "./WalletBalanceIcon"

import {WalletBalanceData} from '../../data/WalletBalanceData'
import ShowSettingsModal from "modules/Profile/settings"
type UName = string

const BannerDescription = ({ uName : UName }) => {
  const [toggleModal, setToggleModal] = useState(false)

    return (
        <div className="w-full flex custom-2xl:flex-row xl:flex-row lg:flex-col mt-[60px] justify-between">
            <ShowSettingsModal toggleShow={toggleModal} onClose={() => setToggleModal(false)} />
            <div className="flex flex-col">
                
                <div className="flex flex-row">
                    <div className="text-[#F3F3F3] font-500 custom-2xl:text-[28px] xl:text-[24px] lg:text-[28px] flex items-center">
                        Konstantin1982.sol
                    </div>
                    <div className="flex gap-[5px] items-center text-[#29B080] text-[14px] font-500 ml-[16px] cursor-pointer select-none" onClick={() => setToggleModal(true)}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 6.83252V11.16C2.25 12.75 2.25 12.75 3.75 13.7625L7.875 16.1475C8.4975 16.5075 9.51 16.5075 10.125 16.1475L14.25 13.7625C15.75 12.75 15.75 12.75 15.75 11.1675V6.83252C15.75 5.25002 15.75 5.25002 14.25 4.23752L10.125 1.85252C9.51 1.49252 8.4975 1.49252 7.875 1.85252L3.75 4.23752C2.25 5.25002 2.25 5.25002 2.25 6.83252Z" stroke="#29B080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="#29B080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Setting
                    </div>
                </div>

                <div className="flex flex-row mt-[10px]">
                  <SocialIcon>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px">
                      <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/>
                    </svg>
                  </SocialIcon>
                  <SocialIcon>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px">
                      <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/>
                    </svg>
                  </SocialIcon>
                </div>

            </div>

            <div className="flex h-30 rounded-[25px] border-[#272829] border-[1px] p-[10px] relative cursor-pointer
                            custom-2xl:my-0 xl:my-0 lg:my-[30px]
                            justify-between">
              
              <div className="p-4 flex flex-col justify-end justify-items-end"  onClick={() => (alert("coming soon"))}>
                <div className="flex flex-row">
                  <div className="text-[#f3f3f3] font-500 custom-2xl:text-5 xl:text-4 lg:text-5">
                    871.18
                  </div>
                  <div className="text-[#929298] font-500 custom-2xl:text-5 xl:text-4 lg:text-5 ml-[10px]">
                  USD
                  </div>
                </div>
                <div className="custom-2xl:text-4 xl:text-3 lg:text-4 font-400 text-[#474749]">
                  Total balance
                </div>
                <div className="absolute top-[-15px]">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-1" y="-1" width="34" height="34" rx="13" fill="#162724"/>
                    <path opacity="0.4" d="M23.5 13.75V18.25H22.75C20.5 18.25 19.75 19 19.75 21.25V22.375H12.25V21.25C12.25 19 11.5 18.25 9.25 18.25H8.5V13.75H9.25C11.5 13.75 12.25 13 12.25 10.75V9.625H19.75V10.75C19.75 13 20.5 13.75 22.75 13.75H23.5Z" fill="#29B080"/>
                    <path d="M16 18.25C17.2426 18.25 18.25 17.2426 18.25 16C18.25 14.7574 17.2426 13.75 16 13.75C14.7574 13.75 13.75 14.7574 13.75 16C13.75 17.2426 14.7574 18.25 16 18.25Z" fill="#29B080"/>
                    <path d="M12.25 9.625V10.75C12.25 13 11.5 13.75 9.25 13.75H8.5V13.375C8.5 10.75 10 9.625 12.25 9.625Z" fill="#29B080"/>
                    <path d="M23.5 13.375V13.75H22.75C20.5 13.75 19.75 13 19.75 10.75V9.625C22 9.625 23.5 10.75 23.5 13.375Z" fill="#29B080"/>
                    <path d="M12.25 21.25V22.375C10 22.375 8.5 21.25 8.5 18.625V18.25H9.25C11.5 18.25 12.25 19 12.25 21.25Z" fill="#29B080"/>
                    <path d="M23.5 18.25V18.625C23.5 21.25 22 22.375 19.75 22.375V21.25C19.75 19 20.5 18.25 22.75 18.25H23.5Z" fill="#29B080"/>
                    <rect x="-1" y="-1" width="34" height="34" rx="13" stroke="#131314" stroke-width="2"/>
                  </svg>
                </div>
              </div>
              {WalletBalanceData.map(i => {
                return <WalletBalanceIcon kind={i.kind} balance={i.balance} badge={i.icon_url} address={i.addr} onClick={() => alert("coming soon")} />
              })}
              
            </div>
        </div>
    )
}

export default BannerDescription