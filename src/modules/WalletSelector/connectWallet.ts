// import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
// import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";

import detectEthereumProvider from "@metamask/detect-provider";
// import { showErrorToast } from "utils";

const connectWallet = async (
  walletId: string,
  type: string,
  onSelect: (data: { address: string; type: string; provider: any }) => void
) => {
  try {
    let provider = await getProvider(walletId, type);
    let address: string;
    if (type === "solana") {
      await provider.connect();
      address = provider.publicKey.toString();
    } else {
      await provider.enable();
      address = provider.selectedAddress;
    }
    onSelect({ provider, type, address });
  } catch {
    // showErrorToast(`Unable to connect to ${walletId}`);
  }
};

const getProvider = async (walletId: string, type: string) => {
  const errorMessage = (wallet: string) =>
    `${wallet} not installed or available`;
  if (type == "ethereum") {
    if (walletId == "metamask") {
      let provider = await detectEthereumProvider({ mustBeMetaMask: true });
      if (!provider) {
        // showErrorToast(errorMessage("Metamask"));
        return false;
      }
      return provider;
    }
  }
  if (type == "solana") {
    let wallet: any;
    switch (walletId) {
      case "phantom":
        wallet = (window as any).phantom.solana;
        break;
      case "solflare":
        wallet = (window as any).solflare;
        break;
    }
    return wallet;
  }
};

export default connectWallet;
