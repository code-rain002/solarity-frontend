import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CheckIcon } from "components/icons";

const passportSteps = [
  "General Information",
  "Claim Daos",
  "Profile Picture",
  "Select Badges",
  "Edit Style & Mint"
];

const roomSteps = [
  "Buy Room",
  "Edit with your NFT",
  "Place on Twitter & share",
];

const ProgressBar = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  return (
    <div className="p-5">
      {/* <div className="text-white text-[24px] mb-5">
        Create Passport
      </div> */}
      {step <= 5 ? passportSteps.map((item, index) => (
        <div className="flex flex-row justify-start items-center mb-[25px] relative" key={index}>
          {step >= index + 1 && (
            <div className="text-white text-[20px] bg-primary rounded-full h-[40px] w-[40px] flex justify-center items-center">
              {step == index + 1 ? index + 1 : <CheckIcon />}
            </div>
          )}
          {step < index + 1 && (
            <div className="text-[#333] text-[20px] bg-transparent rounded-full h-[40px] w-[40px] bg-[#999] flex justify-center items-center">
              {index + 1}
            </div>
          )}
          <span
            className={`${
              step > index ? "text-white" : "text-[#333]"
            } text-[20px] ml-5`}
          >
            {item}
          </span>
          <div
            className={`absolute ${
              step > index + 1 ? "h-[25px]" : "h-0"
            } w-[2px] bg-primary top-[40px] left-[19px]`}
          ></div>
        </div>
      )) : null}
      {/* <div className="text-white text-[24px] mb-5">
        Create Room
      </div>
      {step > 5 ? roomSteps.map((item, index) => (
        <div className="flex flex-row justify-start items-center mb-[25px] relative" key={index}>
          {(step-5) >= index + 1 && (
            <div className="text-white text-[20px] bg-primary rounded-full h-[40px] w-[40px] flex justify-center items-center">
              {(step-5) == index + 1 ? index + 1 : <CheckIcon />}
            </div>
          )}
          {(step-5) < index + 1 && (
            <div className="text-[#333] text-[20px] bg-transparent rounded-full h-[40px] w-[40px] bg-[#999] flex justify-center items-center">
              {index + 1}
            </div>
          )}
          <span
            className={`${
              (step-5) > index ? "text-white" : "text-[#333]"
            } text-[20px] ml-5`}
          >
            {item}
          </span>
          <div
            className={`absolute ${
              (step-5) > index + 1 ? "h-[25px]" : "h-0"
            } w-[2px] bg-primary top-[40px] left-[19px]`}
          ></div>
        </div>
      )) : null} */}
    </div>
  );
};

export default ProgressBar;
