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
import WalletAddress from "./WalletAddress";
import { useMetaplex } from "utils/contexts/useMetaplex";
import { useWallet } from "@solana/wallet-adapter-react";

const EditRoom = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));

  const onContinue = () => {
    const data = {};
    const payload = {
      stepNum: 8,
      data,
    };
    dispatch(goStep(payload));
  };

  const onUndo = () => {
    const payload = {
      stepNum: 6,
      data: {},
    };
    dispatch(goStep(payload));
  };

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pb-0 lg:pt-8 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          Edit with your NFT
        </h3>
        <WalletAddress />
      </div>
      {/*body*/}
      <div className="relative p-5 lg:p-5 flex-auto">

      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => onUndo()} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Continue"
            icon=""
            bordered={false}
            onClick={() => onContinue()}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditRoom;
