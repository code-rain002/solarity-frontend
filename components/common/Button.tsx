import 'font-awesome/css/font-awesome.min.css';

export interface ButtonProps {
  caption: string;
  icon: string;
  bordered: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`solarity-button font-medium py-[24px] px-[22px] rounded-[22px] text-white w-[210px] h-[77px] text-[18px] sm:text-[22px] text-center tracking-wider hover:bg-grey inline-flex items-center justify-center ${props.bordered?'text-lightprimary border-lightprimary border-2':'bg-primary'}`}>
        {props.icon?<i className="fa fa-chrome fa-lg pr-[10px]"></i>:""}
        <span>{props.caption}</span>
    </button>
  );
};

export default Button;
