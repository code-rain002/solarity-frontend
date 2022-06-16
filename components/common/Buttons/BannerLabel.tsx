import 'font-awesome/css/font-awesome.min.css';
import Image from "next/image";

export interface ButtonLabelProps {
  icon: any;
}

const ButtonLabel = (props: ButtonLabelProps) => {
  return (
    <button className={`font-bold p-[12px] rounded-[22px] text-white h-[52px] sm:h-[60px] text-[18px] sm:text-[20px] text-center tracking-wider hover:bg-focusbackground inline-flex items-center justify-center border-darkprimary border-2 radius-[22px]`}>
        <Image src={props.icon}></Image>
    </button>
  );
};

export default ButtonLabel;
