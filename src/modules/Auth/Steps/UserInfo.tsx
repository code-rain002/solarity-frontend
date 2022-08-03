import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import { AddressImg, EthereumImg, GithubImg, PolygonImg } from "components/Common/Images";
import { DomainInput, SharedInput } from "components/Common/Forms";
import { DiscordLink } from "../Links";
import { TwitterLink } from "../Links/TwitterLink";
import { minifyAddress, showErrorToast } from "utils";
import { apiCaller, getErrorMessage } from "utils/fetcher";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { changeInfo } from '../../../redux/slices/authSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'

const infoSchema = yup.object({
  domain: yup.string()
    .min(3, "Please enter your domain name more than 3 characters.")
    .max(30, "Please enter your domain name less than 30 characters.")
    .required("This field is required."),
  title: yup.string()
    .nullable()
})

const UserInfo = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { goStep } = props
  const { userInfo, loading } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.auth.userInfo,
      loading: state.common.appLoading
    })
  );
  const { domain, title } = userInfo;

  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [error, setError] = useState(null)

  useEffect(() => {
    if (domain === "") {
      setError("Please input your domain name.")
      return;
    }
    if (domain !== null) {
      let formatted = domain.toLowerCase()
      formatted = formatted.replace(" ", "")
      formatted = formatted.substr(0, formatted.lastIndexOf("."))
      // console.log(formatted)
      checkDomainAvailability(formatted)
    }
  }, [domain])

  const checkDomainAvailability = (formattedDomain) => {
    apiCaller
      .get(`auth/domainAvailability/${formattedDomain}`)
      .then((response) => {
        // console.log(response.data)
        const result = response.data;
        if (result.available) {
          setError(null)
        } else {
          setError(result.reason)
        }
      })
      .catch((err) => {
        const message = getErrorMessage(err)
        showErrorToast(message)
      });
  };

  const changeInfoValue = (value, type) => {
    const payload = {
      value,
      type
    }
    dispatch(changeInfo({ payload: payload }))
  }

  return (
    <div className=" pr-[0] lg:pr-[7%]">
      <div className="relative w-auto my-6 mx-auto">
        {/*content*/}
        <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
            <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
              Creating a passport
            </h3>
            <AddressButton caption={miniPublicKey ? miniPublicKey : ""} icon={AddressImg} onClick={null} />
          </div>
          {/*body*/}
          {/* {discordUsername ? discordUsername : 'dasd'} */}
          <div className="relative p-[32px] lg:p-14 flex-auto">
            <div>
              <DomainInput 
                changeValue={changeInfoValue} 
                isError={error ? true : false} 
                initValue={userInfo.domain}
                setError={setError}
                />
              {
                error ? <div className="text-[16px] text-rose-600">{error}</div> : null
              }
            </div>
            <div className="mt-6">
              <SharedInput changeValue={changeInfoValue} caption="Input your title" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="mt-6 mb-3 xl:mt-6 xl:mb-6 xl:text-left">
                <TwitterLink />
              </div>
              <div className="my-3 xl:my-6 xl:text-center">
                <DiscordLink />
              </div>
              <div className="my-3 xl:my-6 xl:text-right">
                <WalletButton caption="Connect" icon={GithubImg} onClick={null} styles="!w-[100%] xl:!w-[95%]" />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-[25px] lg:mt-[30px]">
              <div className="my-3">
                <WalletButton caption="Connect ETH wallet" icon={EthereumImg} onClick={null} styles="!w-[100%]" description="optional" />
              </div>
              <div className="my-3 hidden lg:block">
                <WalletButton caption="Connect Polygon wallet" icon={PolygonImg} onClick={null} styles="!w-[100%]" description="optional" />
              </div>
            </div>
          </div>
          <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
            <div className="inline-block w-[20%] pr-2">
              <BackButton onClick={() => router.push({pathname: '/'})} styles="rounded-[15px]" />
            </div>
            <div className="inline-block w-[80%] pl-2">
              <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => goStep(2)} disabled={(error || error !== null ) ? true : false} styles="rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;