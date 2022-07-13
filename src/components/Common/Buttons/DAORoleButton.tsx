import Image from "next/image";
import SidebarAvatar from "../Layout/SidebarAvatar";

export interface DAORoleButtonProps {
  caption: string;
  icon: any;
  onClick: any;
  styles?: string;
  description?: string;
  connected?: boolean;
}

const WalletButton = (props: DAORoleButtonProps) => {
  return (
    <button className={`font-medium px-[16px] rounded-[15px] text-white/70 w-full mb-[24px]
                        text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary
                        hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center
                        justify-center bg-[#1d1e20] justify-between ${props.styles} 
                        ${props.connected?'outline-1 bg-focusbackground !text-white':''}`} onClick={props.onClick}>
        <span className="text-[16px] w-[90%] text-left flex flex-col ">
          {props.caption}
          <label className="text-white/30">
            {props.description}
          </label>
        </span>
        <div className="pt-2 text-right">
          <SidebarAvatar img_url={props.icon} />
        </div>
    </button>
  );
};

export default WalletButton;
