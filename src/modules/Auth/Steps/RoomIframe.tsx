import { PrimaryButton } from "components/Common/Buttons";
import { SolanaIcon } from "components/icons";
import { RootStateOrAny, useSelector } from "react-redux";

// const BaseUrl = process.env.NODE_ENV === "development"
// 	? process.env.NEXT_PUBLIC_LOCAL_FRONTEND_URL + "/"
// 	: process.env.NEXT_PUBLIC_FRONTEND_URL + "/";

const BaseUrl = "https://solarity-frontend.vercel.app";

const RoomIframe = (props) => {
	const { roomInfo } = useSelector((state: RootStateOrAny) => ({
		roomInfo: state.marketplace.selectedRoom,
	}));

	return (
		<div className="rounded-[20px] border-[1px] border-primary bg-[#1a1a1c] p-3">
			<div className="rounded-[16px] overflow-hidden">
				{roomInfo && (
					<iframe
						src={BaseUrl + `/frames/ownroom${roomInfo.no}`}
						width={"100%"}
						height={340}
					></iframe>
				)}
			</div>
			<div className="text-[#929298] mt-3">
				<div className="flex flex-row items-center gap-2">
					<span className="md:flex items-center justify-center h-[25px] w-[25px] rounded-[15px] border-[1px] border-primary">
						<SolanaIcon />
					</span>
					<span className="text-[20px]">{roomInfo.collectionName}</span>
				</div>
				<div className="text-white text-[32px] my-1">{roomInfo.roomName}</div>
				<div className="text-[16px] mb-2">{roomInfo.description}</div>
				<button className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary">
					<span>{"Buy for " + roomInfo.price + " VERSE"}</span>
				</button>
			</div>
		</div>
	);
};

export default RoomIframe;
