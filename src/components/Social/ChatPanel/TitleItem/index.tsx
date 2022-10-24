import React from "react";

const TitleItem = (props) => {
  return (
    <div className="flex items-center justify-between text-xl leading-normal font-medium text-white pb-6 w-full">
      <div>
        {props.title} &nbsp;&nbsp;
        {props.comment && (
          <span className="text-grey">{props.comment}</span>
        )}
      </div>
      <div>
        {props.button && (
          <div className="float-right">
            {props.button}
          </div>
        )}
      </div>
    </div>
  );
}

export default TitleItem;