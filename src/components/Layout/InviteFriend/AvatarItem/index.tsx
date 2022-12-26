import React from "react";
const AvatarItem = (props) => {
  return (
    <div className="relative" >
      <div className="w-13 h-13 rounded-xl">
        <img src={props.img} className=" rounded-xl" alt="Avatar" width="52" height="52" />
      </div>
      {props.isActive && (
        <div
          className=" absolute top-0 right-0 w-[10px] h-[10px] bg-secondaryColor rounded-full shadow"
        ></div>
      )}
    </div>
  );
}

export default AvatarItem;