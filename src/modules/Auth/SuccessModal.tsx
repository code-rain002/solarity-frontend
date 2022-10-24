import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const SuccessModal = (props) => {
	const router = useRouter();

	return (
		<>
			<div
				className="justify-center items-center sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[120] outline-none focus:outline-none"
			>
				<div
					className="relative w-auto my-6 mx-auto max-w-[380px]"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{/*content*/}
					<div className=" rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between pt-5 pl-8 pr-6 rounded-t">
							<h3 className="text-[26px] text-white font-medium tracking-[0.02em]">
								Mint Success
							</h3>
						</div>
						{/*body*/}
						<div className="relative p-8 flex-auto">
							<div className="py-3">
								<button className={`font-light py-[22px] px-[22px] rounded-[14px] text-white w-[316px] h-[56px] text-[16px] sm:text-[20px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between`} onClick={() => router.push({ pathname: '/auth/buyroom' })}>
									<span className="">
										Buy your own room
									</span>
									<div className="text-right flex flex-row items-center gap-3">
										{/* <Image src={wallet.adapter.icon} width={28} height={28} /> */}
									</div>
								</button>
							</div>
							<div className="py-3">
								<button className={`font-light py-[22px] px-[22px] rounded-[14px] text-white w-[316px] h-[56px] text-[16px] sm:text-[20px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between`}>
									<span className="">
										Tweet your passport
									</span>
									<div className="text-right flex flex-row items-center gap-3">
										{/* <Image src={wallet.adapter.icon} width={28} height={28} /> */}
									</div>
								</button>
							</div>
							<div className="py-3">
								<button className={`font-light py-[22px] px-[22px] rounded-[14px] text-white w-[316px] h-[56px] text-[16px] sm:text-[20px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between`}>
									<span className="">
										Invite your friend
									</span>
									<div className="text-right flex flex-row items-center gap-3">
										{/* <Image src={wallet.adapter.icon} width={28} height={28} /> */}
									</div>
								</button>
							</div>
							<div className="py-3">
								<button className={`font-light py-[22px] px-[22px] rounded-[14px] text-white w-[316px] h-[56px] text-[16px] sm:text-[20px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between`}>
									<span className="">
										Skip
									</span>
									<div className="text-right flex flex-row items-center gap-3">
										{/* <Image src={wallet.adapter.icon} width={28} height={28} /> */}
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black/70 backdrop-blur-sm fixed inset-0 z-[100]"></div>
		</>
	)
}

export default SuccessModal;