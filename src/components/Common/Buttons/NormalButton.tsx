export interface ButtonProps {
  caption: string;
  onClick: any;
  styles? : string;
}

const NormalButton = (props: ButtonProps) => {
  return (
    <button className={`flex rounded-[12px] h-[42px] items-center justify-center font-500 text-[#f3f3f3] text-[14px] ${props.styles}`} onClick={props.onClick}>
        <span>{props.caption}</span>
    </button>
  );
};

export default NormalButton;
