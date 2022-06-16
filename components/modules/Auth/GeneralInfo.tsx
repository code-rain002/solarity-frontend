import React, { useState } from "react";
import Image from "next/image";
import AddressButton from "../../common/Buttons/AddressButton";

import addressImg from "../../../assets/images/address.png";
import DomainInput from "../../common/Forms/DomainInput";
import WalletButton from "../../common/Buttons/WalletButton";

import avatar from '../../../assets/images/Avatar.png';
import twitterImg from "../../../assets/images/twitter.png";
import discordImg from "../../../assets/images/discord.png";
import githubImg from "../../../assets/images/github.png";
import PrimaryButton from "../../common/Buttons/PrimaryButton";
import Logo from "../../common/Logo";

export const GeneralInfo = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20px] items-baseline">
        <div className=" pr-[0] lg:pr-[20%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-5 pl-14 pr-12 rounded-t">
                <h3 className="text-[36px] text-white font-medium tracking-[0.02em]">
                  Creating a passport
                </h3>
                <AddressButton caption="Ak...VqT9" icon={addressImg} onClick={null} />
              </div>
              {/*body*/}
              <div className="relative p-14 flex-auto">
                <div>
                  <DomainInput changeValue={setInputValue} />
                </div>
                <div className="grid grid-cols-3">
                  <div className="my-6 text-left">
                    <WalletButton caption="Connect" icon={twitterImg} onClick={null} styles="w-[95%]" />
                  </div>
                  <div className="my-6 text-center">
                    <WalletButton caption="Connected" icon={discordImg} onClick={null} styles="w-[95%]" connected={true} />
                  </div>
                  <div className="my-6 text-right">
                    <WalletButton caption="Connect" icon={githubImg} onClick={null} styles="w-[95%]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                  <div className="my-3">
                    <WalletButton caption="Connect ETH wallet" icon={twitterImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                  <div className="my-3">
                    <WalletButton caption="Connect Polygon wallet" icon={discordImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                </div>
              </div>
              <div className="w-full p-14 flex-auto absolute bottom-0">
                <div>
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={null} disabled={inputValue?false:true} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Logo />
          <div className="relative h-[calc(100vh-180px)]">
            <div className="absolute w-[576px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
              <div className="absolute w-[576px] h-[268px] bg-[#29B080] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px]">
                <div className="mt-[45px]">
                  <Image src={avatar} />
                </div>
                <div className="mt-[26px]">
                  <span className="text-white/80 text-[24px] z-[30]">{inputValue?inputValue:"Enter your domain"}</span>
                </div>
                <div className="mt-[5px]">
                  <span className="text-white/60 text-[16px] z-[30]">Connect your socials</span>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-[268px] h-[116px]">
                <div className="z-10 passport-liner">Wallets</div>
                <div className="z-10">Your DAOs</div>
              </div>
            </div>
            <div className="eclipse-1 absolute"></div>
            <div className="eclipse-2 absolute"></div>
            <div className="eclipse-center-1 absolute z-[20]"></div>
            <div className="eclipse-center-2 absolute z-[20]"></div>
            <div className="eclipse-center-3 absolute z-[20]"></div>
            <div className="eclipse-center-4 absolute z-[20]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
