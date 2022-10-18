import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export interface ButtonProps {
  caption: string;
  icon?: string;
  bordered?: boolean;
  styles?: string;
  onClick: any;
}

const SmallButton = (props: ButtonProps) => {
  return (
    <button
      className={`solarity-button font-light text-[16px] bg-primary text-white py-1.5 pt-2 px-4 rounded-[12px] mb-[15px] text-center inline-flex items-center ${props.styles}`}
      onClick={props.onClick}
    >
      {props.icon ? props.icon : ""}
      <span>{props.caption}</span>
    </button>
  );
};

export default SmallButton;
