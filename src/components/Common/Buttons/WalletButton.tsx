import Image from "next/image";

export interface WalletButtonProps {
  caption: string;
  icon: any;
  onClick: any;
  styles?: string;
  description?: string;
  connected?: boolean;
  iSize? : number;
  height? : number
}

const WalletButton = (props: WalletButtonProps) => {
  return (
    <button className={`font-medium py-[22px] px-[22px] rounded-[14px] text-white/70 w-[316px] h-[${props.height === undefined ? 56 : props.height}px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center justify-center bg-[#1d1e20] justify-between ${props.styles} ${props.connected?'outline-1 bg-focusbackground !text-white':''}`} onClick={props.onClick}>
        <span className="text-[16px] w-[90%] text-left">{props.caption} <label className="text-white/30">{props.description}</label></span>
        <div className="pt-2 text-right"><Image src={props.icon} width={props.iSize  === undefined ? 28 : props.iSize } height={props.iSize  === undefined ? 28 : props.iSize}></Image></div>
    </button>
  );
};

export default WalletButton;
