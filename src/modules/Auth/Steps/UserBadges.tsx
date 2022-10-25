import {
  AddressButton,
  BackButton,
  PrimaryButton,
} from "components/Common/Buttons";
import {
  AddressImg,
  AvatarImg,
  MetamaskImg,
  PhantomImg,
} from "components/Common/Images";
import Logo from "components/Common/Logo";
import { UserAvatar } from "components/Common/Panels";
import { CheckIcon, CloseIcon } from "components/icons";
import { rooms } from "data/Marketplace";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeInfo, goStep } from "redux/slices/authSlice";
import { minifyAddress } from "utils";
import WalletAddress from "./WalletAddress";

const badges = [
  { icon: '/images/badges/polygon.png', name: 'Polygon', active: false },
  { icon: '/images/badges/polygon.png', name: 'Animals', active: false },
  { icon: '/images/badges/polygon.png', name: 'Comedy', active: false },
  { icon: '/images/badges/polygon.png', name: 'Travel', active: false },
  { icon: '/images/badges/polygon.png', name: 'Food', active: false },
  { icon: '/images/badges/polygon.png', name: 'Sports', active: false },
  { icon: '/images/badges/polygon.png', name: 'Beauty & Style', active: false },
  { icon: '/images/badges/polygon.png', name: 'Art', active: false },
  { icon: '/images/badges/polygon.png', name: 'Gaming', active: false },
  { icon: '/images/badges/polygon.png', name: 'Dance', active: false },
  { icon: '/images/badges/polygon.png', name: 'DIY', active: false },
  { icon: '/images/badges/polygon.png', name: 'Programming', active: false },
  { icon: '/images/badges/polygon.png', name: 'Consultant', active: false },
]

const UserBadges = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  const [selectedBadges, setSelectedBadges] = useState([]);

  useEffect(() => {
    const payload = {
      value: selectedBadges,
      type: 'badges'
    }
    dispatch(changeInfo({ payload: payload }));
  }, [selectedBadges]);

  const onSelectBadge = (selectedBadge) => {
    let tempBadges;
    let index = selectedBadges.findIndex((badge, index) => badge.name === selectedBadge.name)
    if (index >= 0) {
      tempBadges = selectedBadges.filter((badge, index) => badge.name !== selectedBadge.name);
    } else {
      tempBadges = [...selectedBadges, selectedBadge];
      if (tempBadges.length > 5) {
        alert('Maximum count is 5');
        return;
      }
    }
    setSelectedBadges(tempBadges);
  }

  const onContinue = () => {
    const data = {
      badges: userInfo.badges
    }
    const payload = {
      stepNum: 5,
      data,
    }
    dispatch(goStep(payload));
  }

  const onUndo = () => {
    const payload = {
      stepNum: 3,
      data: {
        profileImage: {}
      },
    }
    dispatch(goStep(payload));
  }

  return (
    <>
      <div className="flex items-center justify-between py-5 px-5 lg:p-5 lg:pt-8 lg:pb-5 lg:pr-5 rounded-t">
        <h3 className="text-[22px] sm:text-[30px] text-white font-medium tracking-[0.02em]">
          Choose your badges
        </h3>
        <WalletAddress />
      </div>
      <div className="h-[436px] sm:h-[600px] overflow-scroll px-5">
        {badges.length && badges.map((badge, index) => {
          const isSelected = selectedBadges.findIndex((item, index) => item.name == badge.name) >= 0;
          return (
            <div className={`inline-block px-4 py-2 rounded-full mr-3 mb-3 cursor-pointer border-[1px] border-primary hover:bg-primary ${isSelected ? 'bg-primary' : 'bg-[#162724]'}`} key={index} onClick={() => onSelectBadge(badge)}>
              <div className="flex flex-row items-center">
                {isSelected ? <span className="h-[20px] w-[20px] text-white text-medium"><CheckIcon /></span> : <Image src={badge.icon} height={20} width={20} />}
                <span className="text-white text-[14px] md:text-[18px] ml-2">{badge.name}</span>
              </div>
            </div>
          );
        })}
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
            disabled={false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default UserBadges;
