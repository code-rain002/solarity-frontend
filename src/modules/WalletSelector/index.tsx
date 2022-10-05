// import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import connectWallet from "./connectWallet";

import { Button, WalletButton } from "components/Common/Buttons";

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

const WalletSelector: FC<{
  open: boolean;
  onClose: () => void;
  onSelect: (
    address: string,
    type: "ethereum" | "solana",
    provider: any
  ) => void;
  title?: string;
  subtitle?: string;
  type: "all" | "ethereum" | "solana";
}> = ({ open, onClose, onSelect, title, subtitle, type }) => {
  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center hidden sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[120] outline-none focus:outline-none"
            onClick={onClose}
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
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-grey h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-8 flex-auto">
                  {WALLETS.map(({ label, id, type, image }) => (
                    <div className="py-3" key={id}>
                      <WalletButton
                        caption={label}
                        icon={image}
                        onClick={() => {
                          connectWallet(
                            id,
                            type,
                            ({ address, type, provider }) => {
                              onSelect(address, type, provider);
                            }
                          );
                        }}
                      />
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

export default WalletSelector;
