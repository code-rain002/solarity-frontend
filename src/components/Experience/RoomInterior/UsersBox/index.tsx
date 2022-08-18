import { UpArrow } from "components/icons"
import { UsersBoxData } from "data/Experience"
import CopyInviteLinkBtn from "./CopyInviteLinkBtn"
import UsersBoxItem from "./UsersBoxItem"

type UsersBoxType = {
    setLeftSideActive : any,
    leftSideActive : string,
}

const UsersBox = (props : UsersBoxType) => {
    return (
        <div className={` absolute bottom-[32px] right-[32px] w-[426px] top-[108px] rounded-[24px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${props.leftSideActive === "users" ? "flex flex-col" : "hidden" } pt-[6px] pb-[0px] px-[6px] overflow-hidden 
                        cursor-default `}>
            <div className=" flex flex-row items-center justify-between w-full h-[30px] pt-[32px] px-[32px] pb-[32px] ">
                <div className="flex flex-row gap-[12px]">
                    <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
                        Users
                    </div>
                    <div className="font-['Outfit'] font-[500] text-[24px] text-[#474749] select-none ">
                        55
                    </div>
                </div>
                    
                <div className=" flex flex-row items-center  gap-[24px] cursor-pointer " >
                    <CopyInviteLinkBtn onClick={() => console.debug("okay")}/>
                    <div className="flex cursor-pointer " onClick={() => props.leftSideActive === "users" ? props.setLeftSideActive("") : "" }>
                        <UpArrow /> 
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[16px] px-[26px] pt-[12px] overflow-y-scroll overflow-x-visible">
                {UsersBoxData.map(i => <UsersBoxItem imgUrl={i.imgUrl} uName={i.uName} uState={i.uState} mute={i.mute} />)}
            </div>
            <div className="absolute bottom-[0px] right-[0px] h-[30px] w-full bg-gradient-to-t from-[#131314] to-[rgba(19, 19, 20, 0)] ">

            </div>
        </div>
    )
}

export default UsersBox