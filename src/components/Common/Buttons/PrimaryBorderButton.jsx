import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const PrimaryBorderButton = (props) => {
  return (
    <button className={`font-medium p-[6px] px-[15px] rounded-[10px] text-primary text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center ${props.disabled ? 'bg-[#1d1e20] button-disabled' : 'bg-[#162724] border-[#29B080] border'} hover:bg-[#29B080] hover:text-white ${props.styles}`} onClick={props.disabled ? null : props.onClick}>
      <span className="pr-2">
        {props.icon ? props.icon : ""}
      </span>
      <span>
        {props.caption}
      </span>
    </button>
  );
};

export default PrimaryBorderButton;
