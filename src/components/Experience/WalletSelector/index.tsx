import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import connectWallet, { getProvider } from "./connectWallet";
import { MdOutlineClose as CloseIcon } from "react-icons/md";

const WALLETS = [
  {
    label: "Phantom",
    id: "phantom",
    type: "solana",
    image: "/images/wallets/phantom.png",
    detected: true,
    loading: true,
    installationLink: "https://phantom.app/download",
  },
  {
    label: "Solflare",
    id: "solflare",
    type: "solana",
    image: "/images/wallets/solfare.png",
    detected: true,
    loading: true,
    installationLink: "https://solflare.com/download",
  },
  {
    label: "Metamask",
    id: "metamask",
    type: "ethereum",
    image: "/images/wallets/metamask.png",
    detected: true,
    loading: true,
    installationLink: "https://metamask.io/download/",
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
  darkBackground?: boolean;
}> = ({ open, onClose, onSelect, title, subtitle, type, darkBackground }) => {
  const [wallets, setWallets] = useState(WALLETS);

  const detectWallets = async () => {
    const detectPromises = wallets.map(({ id, type }) =>
      getProvider(id, type, true)
    );
    const values = await Promise.allSettled(detectPromises);

    const _wallets = [...wallets];

    values.forEach((val, index) => {
      if (val.status === "rejected") {
        _wallets[index].detected = false;
      } else {
        const value = val["value"];
        if (!value) {
          _wallets[index].detected = false;
        }
      }
      _wallets[index].loading = false;
    });

    setWallets(_wallets);
  };

  useEffect(() => {
    detectWallets();
  }, []);

  return (
    <Transition
      appear={open}
      show={open}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-out duration-100"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Dialog
        onClick={(e: any) => {
          try {
            if (e.target.className.includes("walletDialogHolder")) {
              onClose();
            }
          } catch { }
        }}
        onClose={onClose}
        as="div"
        style={{ zIndex: "10000000" }}
        className={`fixed inset-0 overflow-y-auto ${darkBackground ? "bg-black/70" : ""
          }`}
      >
        <div className="walletDialogHolder min-h-screen px-4 text-center">
          <Transition.Child
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="walletDialogHolder"
          >
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-brandblack p-6 px-10 text-left align-middle shadow-xl transition-all">
              <div className="absolute top-3 right-5">
                <a onClick={onClose}>
                  <CloseIcon fontSize="30" className="cursor-pointer" />
                </a>
              </div>
              <Dialog.Title
                as="h3"
                className="mb-3 text-center text-2xl font-bold leading-6"
              >
                {title || "Wallets"}
              </Dialog.Title>
              <p className="mb-10 text-center text-sm">
                {subtitle || "Please connect to a wallet from the list below"}
              </p>
              {wallets
                .filter((t) => {
                  if (type === "all") return true;
                  return type === t.type;
                })
                .map(
                  ({
                    label,
                    id,
                    type,
                    image,
                    loading,
                    detected,
                    installationLink,
                  }) => {
                    return (
                      <a
                        onClick={() => {
                          if (loading) return;
                          if (!detected) {
                            return window.open(installationLink);
                          }
                          connectWallet(
                            id,
                            type,
                            ({ address, type, provider }) => {
                              //@ts-ignore
                              onSelect(address, type, provider);
                            }
                          );
                        }}
                        key={id}
                        className={`${loading ? "btn-disabled" : ""
                          } mb-3 flex flex cursor-pointer items-center rounded-xl bg-gray-700 p-3 px-5 hover:bg-secondary`}
                      >
                        <div className="flex flex-1 items-center">
                          <span className="pr-2 text-lg capitalize">
                            {label}
                          </span>
                          <span className="text-xs capitalize text-gray-400">
                            {!loading
                              ? detected
                                ? "Detected"
                                : "Not installed"
                              : "Detecting..."}
                          </span>
                        </div>
                        <div>
                          <img src={image} alt="" className="w-6" />
                        </div>
                      </a>
                    );
                  }
                )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WalletSelector;
