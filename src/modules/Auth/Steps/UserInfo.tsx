import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";

import {
  WalletButton,
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";

import {
  AddressImg,
  EthereumImg,
  GithubImg,
  PolygonImg,
} from "components/Common/Images";
import { DomainInput, SharedInput } from "components/Common/Forms";
import { DiscordLink, GithubLink } from "../Links";
import { TwitterLink } from "../Links/TwitterLink";
import { minifyAddress, showErrorToast } from "utils";
import { apiCaller, getErrorMessage } from "utils/fetcher";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { changeInfo, goStep } from "../../../redux/slices/authSlice";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import WalletAddress from "./WalletAddress";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));
  const { domain, title } = userInfo;

  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!domain) {
    //   setError("Please input your domain name.");
    //   return;
    // }
    if (domain !== null) {
      let formatted = domain.toLowerCase();
      formatted = formatted.replace(" ", "");
      formatted = formatted.substr(0, formatted.lastIndexOf("."));
      // console.log(formatted)
      checkDomainAvailability(formatted);
    }
  }, [domain]);

  const checkDomainAvailability = (formattedDomain) => {
    apiCaller
      .get(`auth/domainAvailability/${formattedDomain}`)
      .then((response) => {
        // console.log(response.data)
        const result = response.data;
        if (result.available) {
          setError(null);
        } else {
          setError(result.reason);
        }
      })
      .catch((err) => {
        const message = getErrorMessage(err);
        showErrorToast(message);
      });
  };

  const changeInfoValue = (value, type) => {
    const payload = {
      value,
      type,
    };
    dispatch(changeInfo({ payload: payload }));
  };

  const onContinue = () => {
    const data = {
      username: userInfo.domain,
      bio: userInfo.title
    }
    const payload = {
      stepNum: 2,
      data,
    }
    dispatch(goStep(payload));
  }

  const onUndo = () => {
    const payload = {
      stepNum: 0,
      data: {
        username: null,
        bio: null
      },
      next: () => router.push({ pathname: '/' })
    }
    dispatch(goStep(payload));
  }

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:px-5 lg:pt-8 lg:pb-0 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          General
        </h3>
        <WalletAddress />
      </div>
      {/*body*/}
      {/* {discordUsername ? discordUsername : 'dasd'} */}
      <div className="relative px-5 pt-8 lg:px-5 lg:pt-10 flex-auto">
        <div>
          <DomainInput
            changeValue={changeInfoValue}
            isError={error ? true : false}
            initValue={userInfo.domain}
            setError={setError}
          />
          {error ? (
            <div className="text-[16px] text-rose-600">{error}</div>
          ) : null}
        </div>
        <div className="mt-3">
          <SharedInput
            changeValue={changeInfoValue}
            caption="Input your bio"
          />
        </div>
        <div className="grid grid-cols-1 custom-2xl:grid-cols-3 gap-3 my-5">
          <div className="custom-2xl:text-left">
            <TwitterLink />
          </div>
          <div className="custom-2xl:text-center">
            <DiscordLink />
          </div>
          <div className="custom-2xl:text-right">
            <GithubLink />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-[20px] lg:mt-[30px]">
          <div className="">
            <WalletButton
              caption="Connect ETH wallet"
              icon={EthereumImg}
              onClick={null}
              styles="!w-[100%]"
              description="optional"
            />
          </div>
          <div className="mt-3 hidden lg:block">
            <WalletButton
              caption="Connect Polygon wallet"
              icon={PolygonImg}
              onClick={null}
              styles="!w-[100%]"
              description="optional"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton
            onClick={() => onUndo()}
            styles="rounded-[15px]"
          />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Continue"
            icon=""
            bordered={false}
            onClick={() => onContinue()}
            disabled={error || error !== null || !domain ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
