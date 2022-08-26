import React from 'react'
import { LeftArrow, RightArrow } from 'components/icons';

export type SwitchProps = {
    onRightArrowClick: () => void;
    onLeftArrowClick: () => void;
}

function Switch(props: SwitchProps) {
    return (
        <div className="flex flex-row w-[96px]">
            <div className='flex-1'>
                <div
                    className={`flex cursor-pointer w-[40px] h-[40px] rounded-[12px] border-[#272829] border-[1px] items-center justify-center bg-globalBgColor
                        absolute hover:border-primary`} onClick={props.onLeftArrowClick}>
                    <LeftArrow />
                </div>
            </div>
            <div className='flex-1'>
                <div
                    className={`flex cursor-pointer w-[40px] h-[40px] rounded-[12px] border-[#272829] border-[1px] items-center justify-center bg-globalBgColor
                        absolute hover:border-primary`} onClick={props.onRightArrowClick}>
                    <RightArrow />
                </div>
            </div>

        </div>
    )
}

export default Switch