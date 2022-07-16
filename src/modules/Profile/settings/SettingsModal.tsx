import React, {useState} from "react"
import RoundedTabItem from "components/Profile/RoundedTabItem"
import {PrimaryButton} from "components/Common/Buttons"
import TabGeneralContent from "components/Profile/TabGeneralContent"
import TabAvatarContent from "components/Profile/TabAvatarContent"
import TabRoomsContent from "components/Profile/TabRoomsContent"
import { CloseIcon } from "components/icons"


const SettingsModal = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const tabItems = ["General", "Avatar" ,"Rooms"].map((i,j) => {
        return <RoundedTabItem selectedStatus={activeIndex === j} title={i} onClick={() => setActiveIndex(j)}/>
    })
    
    return (
        <div className="modal-content md:w-[396px] md:h-[713px] xs:w-fit xs:h-[92vh] flex flex-col relative 
                        pt-8 md:px-10 xs:px-8  pb-10 bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] select-none">
            <div className="flex flex-col">
                <div className="font-500 text-[#f3f3f3] text-[24px] pb-[16px] flex flex-row w-full">
                    Settings
                    {/* <div className="justify-self-center relative w-[20px] h-[20px]">
                        <div className="md:hidden xs:block absolute top-[-10px]" onClick={props.onClose}>
                            <CloseIcon />
                        </div>
                    </div> */}
                </div>
                <div className="flex items-start p-1 border-[1.2px] border-[#272829] rounded-[40px] w-fit gap-[4px]">
                    {tabItems}
                </div>
            </div>
            {activeIndex === 0 ? <TabGeneralContent /> : activeIndex === 1 ? <TabAvatarContent/> : activeIndex === 2 ? <TabRoomsContent /> : ''}
            <div className="self-center justify-self-end w-full z-[1002]">
               <PrimaryButton caption="Save" bordered={false} onClick={() => alert("saved")} disabled={false} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" /> 
            </div>
            <div className="absolute top-[-27px] sm:right-[-20px] sm:inset-x-auto xs:right-0  xs:inset-x-1/2 cursor-pointer" onClick={props.onClose}>
            {/* <div className="absolute top-[-20px] right-[-20px] cursor-pointer md:block xs:hidden" onClick={props.onClose}> */}
                <CloseIcon />
            </div>
        </div>
    )
}

export default SettingsModal