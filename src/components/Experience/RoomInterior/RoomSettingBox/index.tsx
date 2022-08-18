import Image from "next/image"

import { UpArrow } from "components/icons"
import { PsuedoAvatarItemData } from "data/Experience"
import { useState } from "react"
import PsuedoAvatarItem from "components/Experience/Common/PsuedoAvatarItem"
import { PrimaryButton } from "components/Common/Buttons"

type SettingBoxType = {
    setLeftSideActive : any,
    leftSideActive : string,
    kind : string,
}

const SettingBox = (props : SettingBoxType) => {
    const [uName, setUName] = useState("")
    const [activeAvatarImg, setActiveAvatarImg] = useState(PsuedoAvatarItemData[0].imgUrl)
    const [activeAvatar, setActiveAvatar] = useState(0)

    let j = -1
    return (
        <div className={` absolute bottom-[32px] right-[32px] w-[426px] top-[108px] rounded-[24px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${props.leftSideActive === "setting" ? "flex flex-col" : "hidden" } p-[6px] `}>
            <div className=" flex flex-row items-center justify-between w-full h-[30px] pt-[26px] px-[26px] pb-[32px] ">
                <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
                    Setting
                </div>
                <div className=" flex cursor-pointer " onClick={() => props.leftSideActive === "setting" ? props.setLeftSideActive("") : "" }>
                    <UpArrow /> 
                </div>
            </div>


            <div className="relative h-[52px] flex border-[1.2px] border-primary rounded-[15px] mx-[26px]">
                <div className="absolute top-[-12px] left-[10px] bg-globalBgColor font-400 text-primary text-[12px] px-[5px]">
                    {props.kind === "setting" ?  "Room title" : props.kind === "setting_member" ? "Your name" : "" }
                </div>
                <div className="flex w-[100%] justify-center items-center">
                        <input type="text" className="w-full bg-transparent font-400 text-[#f3f3f3] text-[16px] px-[16px]
                                                border-r-[1.5px] border-r-[#272829] box-border" value={uName} onChange={(e) => setUName(e.target.value)} />
                </div>
            </div>
            
            <div className=" flex flex-row h-[320px] rounded-[15px] bg-[#181818] justify-center items-center relative
                            overflow-hidden mx-[26px] my-[24px]">
                <div className=" block w-[60%] h-[67.5%] ">
                    <Image src={activeAvatarImg} layout="responsive" width={1500} height={1500} />
                </div>
                
                <div className=" absolute right-[-60px] w-[105px] h-[105px] z-[199] ">
                    <div className=" block ">
                        <Image src="/images/experience/psuedo_avatars/pseudoAvatar (1).png" layout="responsive" width={1500} height={1500} />
                    </div>
                </div>
                <div className=" absolute left-[-60px] w-[105px] h-[105px] z-[199] ">
                    <div className=" block ">
                        <Image src="/images/experience/psuedo_avatars/pseudoAvatar (2).png" layout="responsive" width={1500} height={1500} />
                    </div>
                </div>
                <div className=" absolute h-full w-[90px] right-[0px] bg-gradient-to-l from-[#181818] to-transparent z-[200]"></div>
                <div className=" absolute h-full w-[90px] left-[0px] bg-gradient-to-r from-[#181818] to-transparent z-[200]"></div>
            </div>

            <div className="relative px-[26px]">
                <div className=" grid grid-cols-2 gap-[24px] h-[230px] overflow-y-scroll overflow-x-visible pr-[10px]
                                pb-[30px] overscroll-contain">
                    {
                        PsuedoAvatarItemData.map((i) => {
                            j++
                            return <PsuedoAvatarItem key={j} itemId={j} activeAvatar={activeAvatar} setActiveAvatar={(i) => setActiveAvatar(i)}
                                    imgUrl={i.imgUrl} title={i.title} setActiveAvatarImg={(k) => setActiveAvatarImg(k)} />
                        })
                    }
                </div>
                <div className=" absolute bottom-[0px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent" ></div>
            </div>
            
            <div className=" mt-[24px] mx-[26px]  ">
                <PrimaryButton caption={props.kind === "setting" || props.kind === "setting_member" ? "Save changes" : "" }
                                bordered={false} onClick={() => {alert("Saved")}} disabled={false} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" /> 
            </div>




        </div>
    )
}

export default SettingBox