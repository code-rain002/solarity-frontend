import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { HexColorPicker } from "react-colorful";

import {
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import { changeInfo, goStep } from "redux/slices/authSlice";
import { StepTitle, WalletAddress } from "./Components";

const EditStyle = (props) => {
  const { onMint } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const { userInfo, loading, isMobile } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
    isMobile: state.common.isMobile
  }));

  const onSetColor = (value, target) => {
    let tempStyle = {};
    Object.assign(tempStyle, userInfo.passportStyle);
    const payload = {
      value: {
        ...tempStyle,
        [target]: value,
      },
      type: "passportStyle",
    };
    dispatch(changeInfo({ payload: payload }));
  };

  const onContinue = () => {
    const data = {
      passportStyle: userInfo.passportStyle,
    };
    const payload = {
      stepNum: 6,
      data,
      next: router.push({ pathname: '/auth/buyroom' }),
    };
    dispatch(goStep(payload));
  };

  const onUndo = () => {
    const payload = {
      stepNum: 4,
      data: {
        badges: [],
      },
    };
    dispatch(goStep(payload));
  };

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pb-0 lg:pt-8 rounded-t">
        {!isMobile ? (
          <h3 className="text-[22px] sm:text-[30px] text-white font-medium tracking-[0.02em]">
            Edit Style
          </h3>
        ) : (
          <StepTitle caption={'Style'} />
        )}
        <WalletAddress />
      </div>
      {/*body*/}
      <div className="relative p-5 pt-0 sm:p-5 flex-auto text-[16px] sm:text-[20px]">
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Logo Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{ backgroundColor: `${userInfo.passportStyle.logo}` }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#29b080"}
              onChange={(value) => onSetColor(value, "logo")}
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Background Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{
                backgroundColor: `${userInfo.passportStyle.background}`,
              }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#333333"}
              onChange={(value) => onSetColor(value, "background")}
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Line Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{ backgroundColor: `${userInfo.passportStyle.line}` }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#29b080"}
              onChange={(value) => onSetColor(value, "line")}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center relative">
          <span className="text-white">Text Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{ backgroundColor: `${userInfo.passportStyle.text}` }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#ffffff"}
              onChange={(value) => onSetColor(value, "text")}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => onUndo()} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Mint"
            icon=""
            bordered={false}
            onClick={() => onMint()}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditStyle;
