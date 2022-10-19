import React, { useState } from "react";
import Link from "next/link";
import { Button } from "components/Common/Buttons";
import { useWallet } from "@solana/wallet-adapter-react";
import { minifyAddress } from "utils";
import Image from "next/image";

export const ConnectWallet = () => {
  const { wallets } = useWallet();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="text-center sm:text-left relative z-50">
        <Button
          caption="Connect wallet"
          icon=""
          bordered={false}
          onClick={() => setShowModal(true)}
        />
        <br className="block sm:hidden"></br>
        <Link href="#">
          <a className="text-[#929298] mx-8 py-1 w-[100%] sm:w-[auto] mt-[10px]">
            Skip
          </a>
        </Link>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center hidden sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[120] outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-[380px]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/*content*/}
              <div className=" rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-5 pl-8 pr-6 rounded-t">
                  <h3 className="text-[20px] text-white font-medium tracking-[0.02em]">
                    Choose your wallet
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent  text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-grey h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-8 flex-auto">
                  {wallets.map((wallet, index) => (
                    <div className="py-3" key={index}>
                      <button
                        className={`font-medium py-[22px] px-[22px] rounded-[14px] text-white/70 w-[316px] h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between ${wallet.adapter.connected
                          ? "outline-1 bg-focusbackground !text-white"
                          : ""
                          }`}
                      >
                        {!wallet.adapter.connected ? (
                          <>
                            <span className="text-[16px] text-left">
                              {wallet.adapter.name}
                            </span>
                            <div className="text-right flex flex-row items-center gap-3">
                              <div className="text-white/30 text-[14px]">
                                {wallet.readyState}
                              </div>
                              <Image src={wallet.adapter.icon} width={28} height={28}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-right flex flex-row items-center gap-3 justify-between w-full">
                              <Image src={wallet.adapter.icon} width={28} height={28} />
                              <div className="text-white/30 text-[14px]">
                                {"Connected"}
                              </div>
                              <div className="text-white/30 text-[14px]">
                                {minifyAddress(wallet.adapter.publicKey.toString(), 4)}
                              </div>
                            </div>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/70 backdrop-blur-sm fixed inset-0 z-[100]"></div>
        </>
      ) : null}
    </>
  );
};
