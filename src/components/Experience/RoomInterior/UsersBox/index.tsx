import { UpArrow } from "components/icons"

type UsersBoxType = {
    setLeftSideActive : any,
    leftSideActive : string,
}

const UsersBox = (props : UsersBoxType) => {
    return (
        <div className={` absolute bottom-[32px] right-[32px] w-[426px] top-[108px] rounded-[24px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${props.leftSideActive === "users" ? "flex" : "hidden" } p-[6px] `}>
            <div className=" flex flex-row items-center justify-between w-full h-[30px] pt-[26px] px-[26px] pb-[32px] ">
                <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
                    Users
                </div>
                <div className=" flex cursor-pointer " onClick={() => props.leftSideActive === "users" ? props.setLeftSideActive("") : "" }>
                    <UpArrow /> 
                </div>
            </div>
        </div>
    )
}

export default UsersBox