import React, {useState} from "react"
import RoundedTabItem from "components/Profile/RoundedTabItem"
import {PrimaryButton} from "components/Common/Buttons"
import TabGeneralContent from "components/Profile/TabGeneralContent"
import TabAvatarContent from "components/Profile/TabAvatarContent"
import TabRoomsContent from "components/Profile/TabRoomsContent"


const SettingsModal = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const tabItems = ["General", "Avatar" ,"Rooms"].map((i,j) => {
        return <RoundedTabItem selectedStatus={activeIndex === j} title={i} onClick={() => setActiveIndex(j)}/>
    })
    
    return (
        <div className="modal-content w-[396px] h-[713px] flex flex-col relative 
                        pt-8 px-10 pb-10 bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] select-none">
            <div className="flex flex-col">
                <div className="font-500 text-[#f3f3f3] text-[24px] pb-[16px]">
                    Settings
                </div>
                <div className="flex items-start p-1 border-[1.2px] border-[#272829] rounded-[40px] w-fit gap-[4px]">
                    {tabItems}
                </div>
            </div>
            {activeIndex === 0 ? <TabGeneralContent /> : activeIndex === 1 ? <TabAvatarContent/> : activeIndex === 2 ? <TabRoomsContent /> : ''}
            <div className="self-center justify-self-end w-full z-[1002]">
               <PrimaryButton caption="Save" bordered={false} onClick={() => alert("saved")} disabled={false} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" /> 
            </div>
            <div className="absolute top-[-20px] right-[-20px] cursor-pointer" onClick={props.onClose}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9564 11.866L8.09082 7.00028L12.9565 2.13454C13.2581 1.83292 13.2581 1.34528 12.9565 1.04365C12.6548 0.742024 12.1672 0.742024 11.8656 1.04365L6.99995 5.90939L2.13428 1.04365C1.83265 0.742024 1.34503 0.742024 1.04341 1.04365C0.741781 1.34528 0.741781 1.83292 1.04341 2.13454L5.90905 7.00028L1.04341 11.866C0.741781 12.1676 0.741781 12.6553 1.04341 12.9569C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1073 2.13428 12.9569L2.09892 12.9215L2.13428 12.9569L6.99993 8.09117L11.8656 12.9569C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1073 12.9564 12.9569L12.9211 12.9215L12.9564 12.9569C13.2581 12.6553 13.2581 12.1676 12.9564 11.866Z" fill="#5F5F63" stroke="#5F5F63" stroke-width="0.1"/>
                </svg>
            </div>
        </div>
    )
}

export default SettingsModal