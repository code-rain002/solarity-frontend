import React, { useEffect, useState } from "react";

const StepTitle = (props) => {
	return (
		<button className={`absolute -top-[20px] lg:relative lg:top-0 font-medium py-[3px] px-[12px] mt-2 mr-1.5 rounded-[40px] text-white h-[34px] text-[14px] text-center tracking-wider border-[0.5px] border-white/10 outline hover:bg-focusbackground hover:outline-1 hover:outline-focus inline-flex items-center justify-center bg-[#191a1c]`}>
			<span className="text-[16px] w-[100%] text-right text-white">{props.caption}</span>
		</button>
	)
}

export default StepTitle;