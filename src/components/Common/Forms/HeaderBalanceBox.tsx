import React from "react";
import { WalletBalanceData } from "data/WalletBalanceData";
import { UpArrow,DownArrow } from "components/icons";


const BalanceBox = (props) => {
    return (
        <div className="group select-none pr-5 h-full flex flex-col justify-center pl-[12px]
                        custom-2xl:pr-[22px] xl:pr-[12px] lg:pr-[22px] md:pr-[20px] xs:pr-[20px]
                        cursor-pointer relative text-[14px] font-400" onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
            <div className="text-[#929298]">
                Balance
            </div>
            <div className="flex flex-row items-center  font-500">
                <span className="text-[#F3F3F3]">871.18</span>
                <span className="text-[#929298] px-[12px]">USD</span>
                { props.openState ? <UpArrow /> : <DownArrow />}
            </div>

            <div className={`duration-300 px-[16px] group-hover:py-[8px] p-[0px] flex flex-col items-start absolute
                            top-[50px] opacity-0 left-[-12px] h-[0px] w-full bg-[#131314]
                            border-[#1d1f1f] border-[2px] rounded-[12px] text-white z-[1000] group-hover:h-[150px] group-hover:opacity-100 overflow-hidden
                            `} >
                {WalletBalanceData.map(i => {
                    return (
                        <div className="rounded-[10px] hover:bg-[#1d1d1f] bg-transparent px-[10px] py-[8px] w-full flex flex-row py-[6px] font-500 text-[#f3f3f3] group-hover:flex hidden hover:text-primary">
                            {i.balance}
                            <div className="text-[#929298] ml-[5px] ">
                                {i.kind}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BalanceBox