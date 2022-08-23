import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, WalletButton } from "components/Common/Buttons";
import WalletSelector from "modules/WalletSelector";
import { useRouter } from "next/router";
import { changeInfo, login } from "redux/slices/authSlice";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { apiCaller } from "utils/fetcher";
import { signMessage } from "utils/walletHelpers";

export const ConnectWalletModal = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.profile.data,
    })
  );

  const onCheckUser = async (address, type, provider) => {
    const {
      data: { exist },
    } = await apiCaller.post("/auth/userExist", {
      publicKey: address,
      walletType: type,
    });

    if (!exist) {
      // const payload = {
      //   value: address,
      //   type: "solanaAddress"
      // }
      // dispatch(changeInfo({ payload: payload, callback: () => { router.push({ pathname: '/auth/register' }) } }))
      router.push({ pathname: "/auth/register" });
    } else {
      await dispatch(
        login({
          publicKey: address,
          walletType: type,
          provider,
          // onFinally: router.push({ pathname: `/123/profile` })
        })
      );
      let temp = userInfo.username.split('.')
      temp.pop()
      let realDomain = temp.toString()
      router.push({ pathname: `/${realDomain}/profile` })

      console.log("logged in");
    }
  };

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
      <WalletSelector
        type="all"
        title="Login with Wallet"
        subtitle="Select a wallet from the list below"
        open={showModal}
        onClose={() => setShowModal(false)}
        onSelect={(address, type, provider) => {
          localStorage.setItem("publickey", address);
          localStorage.setItem("type", type);
          onCheckUser(address, type, provider);
        }}
      />
    </>
  );
};
