import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, WalletButton } from "components/Common/Buttons";
import WalletSelector from "modules/WalletSelector";
import { useRouter } from "next/router";
import { login } from "redux/slices/authSlice";
import { useDispatch } from "react-redux";

export const ConnectWalletModal = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center sm:text-left relative z-50">
        <Button caption="Connect wallet" icon="" bordered={false} onClick={() => setShowModal(true)} />
        <br className="block sm:hidden"></br>
        <Link href="#"><a className="text-[#929298] mx-8 py-1 w-[100%] sm:w-[auto] mt-[10px]">Skip</a></Link>
      </div>
      <WalletSelector
        type="all"
        title="Login with Wallet"
        subtitle="Select a wallet from the list below"
        open={showModal}
        onClose={() => setShowModal(false)}
        onSelect={(address, type, provider) => {
          localStorage.setItem('publickey', address);
          localStorage.setItem('type', type);
          dispatch(
            login({
              publicKey: address,
              walletType: type,
              provider,
            })
          );
          router.push('/auth/register/userInfo');
        }}
      />
    </>
  );
};
