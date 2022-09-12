import { AddressButton, BackButton, PrimaryButton } from "components/Common/Buttons";
import { AddressImg, AvatarImg, MetamaskImg, PhantomImg } from "components/Common/Images";
import Logo from "components/Common/Logo";
import { UserAvatar } from "components/Common/Panels";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { minifyAddress } from "utils";

const NftDemo = (props) => {
  const { setAvatar, avatar, goStep } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  return (
    <>
      <div className="relative h-[600px] text-center">
        <div className="absolute w-[500px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
          <div className="absolute w-[500px] h-[268px] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px] passport-body">
            {avatar ? (
              <div className="mt-[26px] flex justify-center">
                <UserAvatar imageSrc={avatar} title="RESSURECTION..." />
              </div>
            ) : (
              <div className="mt-[45px] flex justify-center">
                <Image src={AvatarImg} />
              </div>
            )}
            {/* <Image src={AvatarImg} /> */}
            {/* <AvatarPanel imageSrc={avatar} title="RESSURECTION..." /> */}
            <div className="mt-[18px]">
              <span className="text-white/80 text-[24px] z-[30]">
                {userInfo.domain ? userInfo.domain : "Enter your domain"}
              </span>
            </div>
            <div className="mt-[5px]">
              <span className="text-white/80 text-[18px] z-[30]">
                {userInfo.title ? userInfo.title : "Enter your title"}
              </span>
            </div>
            <div className="mt-[3px]">
              <span className="text-white/60 text-[16px] z-[30]">
                Connect your socials
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-[268px] h-[116px]">
            <div className="z-10 passport-liner !pt-3">
              <span className="text-white/60">Wallets</span>
              <div className="mt-3">
                {
                  <span className="ml-1">
                    {userInfo.solanaAddress ? <Image src={PhantomImg} /> : null}
                  </span>
                }
                {
                  <span className="ml-1">
                    {userInfo.ethereumAddress ? (
                      <Image src={MetamaskImg} />
                    ) : null}
                  </span>
                }
              </div>
            </div>
            <div className="z-10 !pt-3">
              <span className="text-white/60">Your DAOs</span>
              <div className="mt-2 justify-between relative margin-auto">
                {userInfo.daos?.length
                  ? userInfo.daos.map((dao, index) => (
                      <div
                        className="absolute left-0 right-0 -ml-[30px]"
                        key={index}
                      >
                        <Image src={dao.profileImage.link} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="eclipse-1 absolute"></div>
        <div className="eclipse-2 absolute"></div>
      </div>
    </>
  );
};

export default NftDemo;
