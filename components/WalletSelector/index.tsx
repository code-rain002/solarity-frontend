// import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import connectWallet from "./connectWallet";
import phantomImage from "../../assets/images/phantom.png";
import slopeImage from "../../assets/images/slope.png";
import solflareImage from "../../assets/images/solflare.png";
import torusImage from "../../assets/images/torus.png";
import solletImage from "../../assets/images/sollet.png";
import metamask from "../../assets/images/sollet_ex.png";

import WalletButton from "../common/WalletButton";

const WALLETS = [
  {
    label: "Phantom",
    id: "phantom",
    type: "solana",
    image: phantomImage,
  },
  {
    label: "Solflare",
    id: "solflare",
    type: "solana",
    image: solflareImage,
  },
  {
    label: "Metamask",
    id: "metamask",
    type: "ethereum",
    image: metamask,
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
        {open ? (<>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          onClick={() => {onClose}}
        >
          <div className="relative w-auto my-6 mx-auto max-w-[380px]" onClick={(e) => {e.stopPropagation()}}>
            {/*content*/}
            <div className=" rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-5 pl-8 pr-6 rounded-t">
                <h3 className="text-[20px] text-white font-medium tracking-[0.02em]">
                  Choose your wallet
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent  text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => onClose()}
                >
                  <span className="bg-transparent text-grey h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-8 flex-auto">
                {WALLETS.map(({ label, id, type, image })  => (
                  <div className="py-3">
                    <WalletButton caption={label} icon={image} onClick={() => {
                      connectWallet(id, type, ({ address, type, provider }) => {
                        onSelect(address, type, provider);
                      });
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/70 backdrop-blur-sm fixed inset-0 z-40"></div></>
        ) : null}
      </>
    // <Transition appear show={open} as={Fragment}>
    //   <Dialog
    //     onClose={onClose}
    //     as="div"
    //     style={{ zIndex: "10000000" }}
    //     className="fixed inset-0 overflow-y-auto"
    //   >
    //     <div className="min-h-screen px-4 text-center">
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <Dialog.Overlay className="fixed inset-0 bg-black/[.7]" />
    //       </Transition.Child>
    //       <span
    //         className="inline-block h-screen align-middle"
    //         aria-hidden="true"
    //       >
    //         &#8203;
    //       </span>
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0 scale-95"
    //         enterTo="opacity-100 scale-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100 scale-100"
    //         leaveTo="opacity-0 scale-95"
    //       >
    //         <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-brandblack p-6 px-10 text-left align-middle shadow-xl transition-all">
    //           <Dialog.Title
    //             as="h3"
    //             className="mb-3 text-center text-2xl font-bold leading-6"
    //           >
    //             {title || "Wallets"}
    //           </Dialog.Title>
    //           <p className="mb-10 text-center text-sm">
    //             {subtitle || "Please connect to a wallet from the list below"}
    //           </p>
    //           {WALLETS.filter((t) => {
    //             if (type === "all") return true;
    //             return type === t.type;
    //           }).map(({ label, id, type, image }) => {
    //             return (
    //               <a
    //                 onClick={() => {
    //                   connectWallet(id, type, ({ address, type, provider }) => {
    //                     onSelect(address, type, provider);
    //                   });
    //                 }}
    //                 key={id}
    //                 className="mb-3 flex flex cursor-pointer items-center rounded-xl bg-gray-700 p-3 px-5 hover:bg-secondary"
    //               >
    //                 <p className="flex-1 text-lg capitalize">{label}</p>
    //                 <div>
    //                   <img src={image} alt="" className="w-6" />
    //                 </div>
    //               </a>
    //             );
    //           })}
    //         </div>
    //       </Transition.Child>
    //     </div>
    //   </Dialog>
    // </Transition>
  );
};

export default WalletSelector;
