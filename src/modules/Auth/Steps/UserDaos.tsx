import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import { AddressImg, DaoBGImg } from "components/Common/Images";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { claimDaos, undoSetupStep } from '../../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'

const UserDaos = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { getDaos, setDaos } = props
  const { profileData, loading } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data,
      loading: state.common.appLoading
    })
  );

  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  useEffect(() => {
    // console.log(profileData)
    if (profileData.stepsCompleted.daoClaimed) {
      // router.push({
      //   pathname: '/auth/register/userPic'
      // })
    } else {
      getDaos()
    }
  }, [])

  useEffect(() => {
    setDaos(profileData.daos)
  }, [profileData.daos])

  const undoUserInfo = () => {
    dispatch(startLoadingApp())

    dispatch(undoSetupStep({
      stepName: "link",
      onFinally: () => {
        dispatch(undoSetupStep({
          stepName: "info",
          onFinally: () => {
            setDaos([])
            router.push({
              pathname: '/auth/register/userInfo'
            })
          }
        }))
      }
    }))

    dispatch(stopLoadingApp())
  }

  const submit = () => {
    dispatch(startLoadingApp())

    dispatch(claimDaos({
      // data: {
      //   daos: profileData.daos
      // },
      successFunction: () => { },
      errorFunction: () => { },
      finalFunction: () => {
        router.push({
          pathname: '/auth/register/userPic'
        })
      },
    }))
    dispatch(stopLoadingApp())
  }

  return (
    <div className=" pr-[0] lg:pr-[7%]">
      <div className="relative w-auto my-6 mx-auto">
        {/*content*/}
        <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
            <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
              DAOs you&apos;re already in
            </h3>
            <AddressButton caption={miniPublicKey ? miniPublicKey : ""} icon={AddressImg} onClick={null} />
          </div>
          {/*body*/}
          <div className="relative p-[32px] lg:p-14 flex-auto">
            {
              loading ?
                <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">Daos Loading...</div>
                :
                profileData.daos?.length ?
                  <div className="grid grid-cols-2 xl:grid-cols-3 max-h-[510px] overflow-scroll">
                    {
                      profileData.daos.map((dao, index) => (
                        <div className="p-2">
                          <DaoPanel imageSrc={dao.profileImageLink} backSrc={DaoBGImg} title={dao.name} />
                        </div>
                      ))
                    }
                  </div>
                  :
                  <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">No DAOs you are in.</div>
            }
          </div>
          <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
            <div className="inline-block w-[20%] pr-2">
              <BackButton onClick={undoUserInfo} styles="rounded-[15px]" />
            </div>
            <div className="inline-block w-[80%] pl-2">
              <PrimaryButton caption="Continue" icon="" bordered={false} onClick={submit} disabled={loading ? true : false} styles="rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDaos;