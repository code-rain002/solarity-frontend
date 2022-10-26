import 'font-awesome/css/font-awesome.min.css';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface BackButtonProps {
  onClick: any;
  styles?: string;
}

const BackButton = (props: BackButtonProps) => {
  const { isMobile } = useSelector((state: RootStateOrAny) => ({
    isMobile: state.common.isMobile
  }));

  return (
    <>
      {isMobile ? (
        <button className={`back-button font-medium p-[16px] sm:p-[22px] rounded-[22px] text-[#f3f3f3] w-[100%] h-[50px] sm:h-[62px] text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center text-lightprimary border-[#272829] border-2 ${props.styles} bg-[#1d1e20]`} onTouchStart={props.onClick}>
          <i className="fa fa-long-arrow-left fa-lg pr-[0px]"></i>
        </button>
      ) : (
        <button className={`back-button font-medium p-[16px] sm:p-[22px] rounded-[22px] text-[#f3f3f3] w-[100%] h-[50px] sm:h-[62px] text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center text-lightprimary border-[#272829] border-2 ${props.styles} bg-[#1d1e20]`} onClick={props.onClick}>
          <i className="fa fa-long-arrow-left fa-lg pr-[0px]"></i>
        </button>
      )}
    </>
  );
};

export default BackButton;
