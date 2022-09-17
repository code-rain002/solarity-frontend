import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  AddressButton,
  WalletButton,
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";

import { AddressImg, DaoBGImg } from "components/Common/Images";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import { apiCaller } from "utils/fetcher";
import { changeInfo } from "redux/slices/authSlice";

const UserDaos = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { goStep } = props;
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));

  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [daos, setDaos] = useState([]);
  const [selectedDaos, setSelectedDaos] = useState([]);

  useEffect(() => {
    dispatch(startLoadingApp());
    if (userInfo.solanaAddress) {
      apiCaller
        .get(`daos/${userInfo.solanaAddress}/address?includeDao=true`)
        .then((response) => {
          // const daos = response.data.daos;
          const daos = [
            {
              name: "New Dao1",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (1).png",
                address: "/images/community/avatars/Picture (1).png"
              }
            }, {
              name: "New Dao2",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (2).png",
                address: "/images/community/avatars/Picture (2).png"
              }
            }, {
              name: "New Dao3",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (3).png",
                address: "/images/community/avatars/Picture (3).png"
              }
            }, {
              name: "New Dao4",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (4).png",
                address: "/images/community/avatars/Picture (4).png"
              }
            }, {
              name: "New Dao5",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (5).png",
                address: "/images/community/avatars/Picture (5).png"
              }
            }, {
              name: "New Dao6",
              symbol: "ND",
              description: "Welcome to new Dao",
              profileImage: {
                link: "/images/community/avatars/Picture (6).png",
                address: "/images/community/avatars/Picture (6).png"
              }
            }, 
          ]
          
          setDaos(daos);
          dispatch(stopLoadingApp());
        })
        .catch((error) => {
          console.log(error);
          dispatch(stopLoadingApp());
        });
    }
  }, []);

  useEffect(() => {
    const payload = {
      value: selectedDaos,
      type: "daos",
    };
    dispatch(
      changeInfo({
        payload: payload,
        callback: () => {
          dispatch(stopLoadingApp());
        },
      })
    );
  }, [selectedDaos]);

  const onSelectDao = (selected) => {
    let tempDaos;
    let index = selectedDaos.findIndex((dao, index) => dao.name === selected.name)
    if (index >= 0) {
      tempDaos = selectedDaos.filter((dao, index) => dao.name !== selected.name);
    } else {
      tempDaos = [...selectedDaos, selected];
      if (tempDaos.length > 3) {
        alert('Maximum count is 3');
        return;
      }
    }
    setSelectedDaos(tempDaos);
  }

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pt-8 lg:pb-0 lg:pr-5 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          DAOs you&apos;re already in
        </h3>
        <AddressButton
          caption={miniPublicKey ? miniPublicKey : ""}
          icon={AddressImg}
          onClick={null}
        />
      </div>
      {/*body*/}
      <div className="relative p-5 lg:p-5 flex-auto">
        {loading ? (
          <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">
            Daos Loading...
          </div>
        ) : daos.length ? (
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 max-h-[570px] overflow-scroll gap-y-3">
            {daos.map((dao, index) => (
              <div className="p-2" key={index}>
                <DaoPanel
                  imageSrc={dao.profileImage.link}
                  backSrc={DaoBGImg}
                  title={dao.name}
                  selected={selectedDaos.findIndex((item, index) => dao.name === item.name) >= 0 ? true : false}
                  onClick={() => onSelectDao(dao)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">
            No DAOs you are in.
          </div>
        )}
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => goStep(1)} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Continue"
            icon=""
            bordered={false}
            onClick={() => goStep(3)}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default UserDaos;
