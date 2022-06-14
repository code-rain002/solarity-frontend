import 'font-awesome/css/font-awesome.min.css';

export interface ButtonProps {
  caption: string;
  icon: string;
  bordered: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`font-bold py-2 px-4 rounded-lg text-white w-full h-[52px] sm:h-[57px] text-[18px] sm:text-[20px] text-center tracking-wider hover:bg-grey inline-flex items-center justify-center ${props.bordered?'text-lightprimary border-lightprimary border-2':'bg-primary'}`}>
        {props.icon?<i className="fa fa-chrome fa-lg pr-[10px]"></i>:""}
        <span>{props.caption}</span>
    </button>
  );
};

export default Button;
