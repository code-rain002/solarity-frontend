import React from 'react'

export interface BuyButtonProps{
    buy: () => void; 
    price: number;
}

export default function BuyButton(props: BuyButtonProps) {
    return (
        <div className="flex justify-center items-center bg-primary w-[278px] h-[52px] rounded-[15px] md:mb-[40px] xs:mb-[0px] xs:mt-[40px]
                        font-['Outfit'] font-[500] text-[16px] text-[#f3f3f3] cursor-pointer hover:shadow-[0_0_20px_-5px_#29b080] "
            onClick={props.buy}>
            Buy for {props.price} SOL
        </div>
    )
}
