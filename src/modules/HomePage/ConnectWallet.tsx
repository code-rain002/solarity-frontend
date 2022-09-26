import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
import { Button, WalletButton } from "components/Common/Buttons";
import WalletSelector from "modules/WalletSelector";
import { useRouter } from "next/router";
import { changeInfo, login } from "redux/slices/authSlice";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { apiCaller } from "utils/fetcher";
import { signMessage } from "utils/walletHelpers";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Adapter, WalletName } from "@solana/wallet-adapter-base";
import { minifyAddress } from "utils";
import Image from "next/image";

const WALLETS = [
  {
    label: "Phantom",
    id: "phantom",
    type: "solana",
    image: "/images/wallets/phantom.png",
  },
  {
    label: "Solflare",
    id: "solflare",
    type: "solana",
    image: "/images/wallets/solflare.png",
  },
  {
    label: "Metamask",
    id: "metamask",
    type: "ethereum",
    image: "/images/wallets/metamask.png",
  },
];

export const ConnectWallet = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wallets, select, connect } = useWallet();
  const [showModal, setShowModal] = useState(false);
  const { userInfo } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.profile.data,
  }));

  const onCheckUser = async (address, type, provider) => {
    localStorage.setItem('publickey', address);
    localStorage.setItem('type', type);

    const {
      data: { exist, user },
    } = await apiCaller.post("/auth/userExist", {
      publicKey: address,
      walletType: type,
    });

    if (exist && user.registerStep == 6) {
      await dispatch(
        login({
          publicKey: address,
          walletType: type,
          provider,
          onFinally: () =>
            router.push({ pathname: `/${user.username}/profile` }),
        })
      );
    } else {
      await dispatch(
        login({
          publicKey: address,
          walletType: type,
          provider,
          onFinally: () => router.push({ pathname: "auth/register" }),
        })
      );
    }
  };

  const onHandleClick = useCallback(
    async (walletName: WalletName, adapter: Adapter) => {
      await select(walletName);
      await adapter.connect();
      onCheckUser(
        adapter.publicKey.toBase58(),
        "solana",
        (window as any).phantom.solana
      );
    },
    [select]
  );

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
                        className={`font-medium py-[22px] px-[22px] rounded-[14px] text-white/70 w-[316px] h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between ${
                          wallet.adapter.connected
                            ? "outline-1 bg-focusbackground !text-white"
                            : ""
                        }`}
                        onClick={() => onHandleClick(wallet.adapter.name, wallet.adapter)}
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
