import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Button, WalletButton } from "components/Common/Buttons";
import WalletSelector from "modules/WalletSelector";
import { PhantomImg, SlopeImg, SolflareImg, SolletExImg, SolletImg, TorusImg } from "components/Common/Images";
import { useRouter } from "next/router";

export const ConnectWalletModal = () => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    return (
      <>
        <div className="text-center sm:text-left relative z-50">
          <Button caption="Connect wallet" icon="" bordered={false} onClick={() => setShowModal(true)} />
          <br className="block sm:hidden"></br>
          <Link href="/auth/register"><a className="text-[#929298] mx-8 py-1 w-[100%] sm:w-[auto] mt-[10px]">Skip</a></Link>
        </div>
        <WalletSelector
          type="all"
          title="Login with Wallet"
          subtitle="Select a wallet from the list below"
          open={showModal}
          onClose={() => setShowModal(false)}
          onSelect={(address, type, provider) => {
            router.push('/auth/register');
            // dispatch(
            //   login({
            //     publicKey: address,
            //     walletType: type,
            //     provider,
            //   })
            // );
          }}
        />
      </>
    );
};
