import { PrimaryButton } from "components/Common/Buttons";
import { SolanaIcon } from "components/icons";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey, Transaction } from "@solana/web3.js";
import { createTransferInstruction, getOrCreateAssociatedTokenAccount } from "utils/token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { placeBid } from "redux/slices/authSlice";

// const BaseUrl = process.env.NODE_ENV === "development"
// 	? process.env.NEXT_PUBLIC_LOCAL_FRONTEND_URL + "/"
// 	: process.env.NEXT_PUBLIC_FRONTEND_URL + "/";

const BaseUrl = "https://solarity-frontend.vercel.app";

const RoomIframe = (props) => {
	const dispatch = useDispatch();
  const router = useRouter();
  const { connection } = useConnection();
  const wallet = useWallet();

	const { roomInfo } = useSelector((state: RootStateOrAny) => ({
		roomInfo: state.marketplace.selectedRoom,
	}));
	const [error, setError] = useState<Boolean>(false);
  const [loadingButton, setLoadingButton] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");

	const buyRoom = async () => {
		console.log('hi');
    const { publicKey, signTransaction } = wallet;

    // spl-token payment for buying room.
    try {
      if (!process.env.NEXT_PUBLIC_WEBSITE_SOLANA_WALLET_ADDRESS || !process.env.NEXT_PUBLIC_SOLARITY_TOKEN_ADDRESS) {
        return console.error('website solana wallet address or solarity_token_address is not set in environment.');
      }
      const toPublicKey = new PublicKey(process.env.NEXT_PUBLIC_WEBSITE_SOLANA_WALLET_ADDRESS)
      const mint = new PublicKey(process.env.NEXT_PUBLIC_SOLARITY_TOKEN_ADDRESS)

      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        publicKey,
        mint,
        publicKey,
        signTransaction
      );

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        publicKey,
        mint,
        toPublicKey,
        signTransaction
      );

      const transaction1 = new Transaction().add(
        createTransferInstruction(
          fromTokenAccount.address, // source
          toTokenAccount.address, // dest
          publicKey,
          roomInfo.price * LAMPORTS_PER_SOL,
          [],
          TOKEN_PROGRAM_ID
        )
      )
      const blockHash = await connection.getRecentBlockhash()
      transaction1.feePayer = await publicKey
      transaction1.recentBlockhash = await blockHash.blockhash
      const signed = await signTransaction(transaction1)
      setLoadingButton(true);
      dispatch(
        placeBid({
          data: {
            roomInfo,
            signed,
            connection,
          },
          successFunction: () => {
            toast.success(
              "You got a room successfully. You can create a room and also decorate a room with own nfts in the profile",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
            setError(false);
            setLoadingButton(false);
          },
          errorFunction: (err) => {
            setError(true);
            if (!!err) {
              setErrorMessage(err);
            }
            setLoadingButton(false);
          },
          finalFunction: () => {
            setLoading(false);
            setLoadingButton(false);
          },
        })
      );
    } catch (error: any) {
      console.error(error.message);
    }
  };

	return (
		<div className="rounded-[20px] border-[1px] border-primary bg-[#1a1a1c] p-3">
			<div className="rounded-[16px] overflow-hidden">
				{roomInfo && (
					<iframe
						src={BaseUrl + `/frames/ownroom${roomInfo.no}`}
						width={"100%"}
						height={340}
					></iframe>
				)}
			</div>
			<div className="text-[#929298] mt-3">
				<div className="flex flex-row items-center gap-2">
					<span className="md:flex items-center justify-center h-[25px] w-[25px] rounded-[15px] border-[1px] border-primary">
						<SolanaIcon />
					</span>
					<span className="text-[20px]">{roomInfo.collectionName}</span>
				</div>
				<div className="text-white text-[32px] my-1">{roomInfo.roomName}</div>
				<div className="text-[16px] mb-2">{roomInfo.description}</div>
				<button className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary" onClick={buyRoom}>
					<span>{"Buy for " + roomInfo.price + " VERSE"}</span>
				</button>
			</div>
		</div>
	);
};

export default RoomIframe;
