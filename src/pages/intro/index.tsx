import { SmallButton } from "components/Common/Buttons";
import { useRouter } from "next/router";
import React from "react";

const IntroPage = () => {
  const router = useRouter();
  const gotoSliders = () => {
    router.push('/intro/sliders');
  }

  return (
    <div className="h-[100vh] p-30 text-center">
      <div className="px-10 pb-5 pt-20 w-full flex justify-center">
        <img src="/logos/logo-green.png" width={285} height={285} />
      </div>
      <h2 className="text-[25px] font-[700] title-color pb-6">SOLARITY</h2>
      <p className="center text-[15px] font-[500] content-color pb-12">The Solana Social Gaming Network</p>
      <SmallButton caption={'START EXPLORING'} onClick={gotoSliders} styles="text-[12px]" />
    </div>
  );
}

export default IntroPage;