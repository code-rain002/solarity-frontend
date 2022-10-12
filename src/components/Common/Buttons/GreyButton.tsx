import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export interface ButtonProps {
  caption: string;
  icon?: string;
  bordered?: boolean;
  styles?: string;
  onClick: any;
}

const GreyButton = (props: ButtonProps) => {
  return (
    <button
      className={` font-light text-[16px] bg-[#1F1F20] border border-[#101012] text-[#B3B3B7] py-1.5 px-4 rounded-[12px] mb-[15px] text-center inline-flex items-center hover:bg-[#262630] ${props.styles}`}
      onClick={props.onClick}
    >
      {props.icon ? props.icon : ""}
      <span>{props.caption}</span>
    </button>
  );
};

export default GreyButton;
