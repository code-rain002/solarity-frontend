import Image from "next/image";

export interface AddressButtonProps {
  caption: string;
  icon: any;
  onClick: any;
}

const AddressButton = (props: AddressButtonProps) => {
  return (
    <button className={`absolute -top-[20px] lg:relative lg:top-0 font-medium py-[3px] px-[6px] mt-2 mr-1.5 rounded-[40px] text-white w-[133px] h-[34px] lg:h-[44px] text-[14px] lg:text-[18px] sm:text-[22px] text-center tracking-wider border-[0.5px] border-white/10 outline hover:bg-focusbackground hover:outline-1 hover:outline-focus inline-flex items-center justify-center bg-[#191a1c]`} onClick={props.onClick}>
        <Image src={props.icon} width={32} height={32}></Image>
        <span className="text-[16px] w-[100%] text-right text-white/60 mr-1">{props.caption}</span>
    </button>
  );
};

export default AddressButton;
