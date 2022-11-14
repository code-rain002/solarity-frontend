import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface GreenButtonProps {
  caption: string;
  icon?: any;
  bordered?: boolean;
  onClick: any;
  styles?: string;
  disabled?: boolean;
}

const GreenButton = (props: GreenButtonProps) => {
  const { isMobile } = useSelector((state: RootStateOrAny) => ({
    isMobile: state.common.isMobile
  }));

  return (
    <>
      {isMobile ? (
        <button className={`solarity-button font-medium py-[8px] min-w-[100px] w-[15vw] rounded-[10px] text-white text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center ${props.bordered ? 'text-lightprimary border-lightprimary border-2' : ''} ${props.disabled ? 'bg-[#1d1e20] button-disabled' : 'bg-[#0D6B38]'} ${props.styles}`} onTouchStart={props.disabled ? null : props.onClick}>
          {props.icon ? props.icon : ""}
          <span className='pl-3'>{props.caption}</span>
        </button>
      ) : (
        <button className={`solarity-button font-medium py-[8px] min-w-[100px] w-[15vw] rounded-[10px] text-white text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center ${props.bordered ? 'text-lightprimary border-lightprimary border-2' : ''} ${props.disabled ? 'bg-[#1d1e20] button-disabled' : 'bg-[#0D6B38]'} ${props.styles}`} onClick={props.disabled ? null : props.onClick}>
          {props.icon ? props.icon : ""}
          <span className='pl-3'>{props.caption}</span>
        </button>
      )}
    </>
  );
};

export default GreenButton;
