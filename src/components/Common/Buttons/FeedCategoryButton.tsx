
export interface FeedCategoryButtonProps {
  caption: string;
  onClick: any;
  isActive : boolean
}

const FeedCategoryButton = (props: FeedCategoryButtonProps) => {
  return (
    <button className={`lg:relative lg:top-0 font-medium mx-2 rounded-[40px] px-[14px]
                        h-[34px] lg:h-[44px] text-[14px] lg:text-[18px] sm:text-[22px] text-center tracking-wider
                      border-[0.5px] border-white/10 hover:border-[#29B080] outline  hover:outline-1 hover:outline-focus
                      hover:text-[#29B080] inline-flex items-center justify-center bg-[#191a1c]
                      ${props.isActive ? 'text-[#29B080] border-[#29B080] bg-focusbackground' : 'text-[#929298] border-[#929298]'}`} onClick={props.onClick}>
        {props.caption}
    </button>
  );
};

export default FeedCategoryButton;