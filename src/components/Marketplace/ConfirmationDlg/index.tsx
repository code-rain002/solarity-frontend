import React from 'react'
import { PrimaryButton } from "components/Common/Buttons"
import { UpArrow } from "components/icons"
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, Transaction } from '@solana/web3.js'
import { createTransferInstruction, getOrCreateAssociatedTokenAccount } from 'utils/token'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { placeBid } from 'redux/slices/profileSlice'
import { toast } from 'react-toastify'


export type ConfirmationDlgType = {
    numberOfFrames: number;
    connectingOtherUsers: boolean;
    anotherInfo: string;
    dlgToggle: boolean;
    setDlgToggle: any;
}

function ConfirmationDlg(props: ConfirmationDlgType) {
    const dispatch = useDispatch();
    const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.marketplace.selectedRoom
    }));

    const { connection } = useConnection();
    const wallet = useWallet();

    const [activeAvatar, setActiveAvatar] = useState(0)
    const [activeAvatarImg, setActiveAvatarImg] = useState(PsuedoAvatarItemData[0].imgUrl)
    const [disabled, setDisabled] = useState(false);
    const router = useRouter()
    const [uName, setUName] = useState("")

    let j = -1

    const closeDlg = (e) => {
        if (e.target.id == "confirmation_dlg") {
            props.setDlgToggle(false)
        }
    }

    const BuyRoom = async () => {
        setDisabled(true);
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
                    selectedRoom.price * LAMPORTS_PER_SOL,
                    [],
                    TOKEN_PROGRAM_ID
                )
            )
            const blockHash = await connection.getRecentBlockhash()
            transaction1.feePayer = await publicKey
            transaction1.recentBlockhash = await blockHash.blockhash
            const signed = await signTransaction(transaction1)
            dispatch(
                placeBid({
                    data: {
                        roomInfo: selectedRoom,
                        signed,
                        connection,
                    },
                    successFunction: () => {
                        setDisabled(false);
                        props.setDlgToggle(false);
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
                    },
                    errorFunction: (err) => {
                        setDisabled(false);
                        if (!!err) {
                            toast.error(
                                err,
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
                        }
                    },
                    finalFunction: () => {
                        setDisabled(false);
                    },
                })
            );
        } catch (error: any) {
            console.error(error.message);
        }
    }

    return (
        <div className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px]
                        backdrop-blur-[20px] bg-[rgba(12,12,14,0.7)]
                        z-[1004] ${props.dlgToggle === true ? "fixed" : "hidden"} `} id="confirmation_dlg" onClick={(e) => closeDlg(e)}>
            <div className=" fixed lg:w-[396px] md:w-[396px] sm:w-full xs:w-full h-[440px] bg-[#131314] md:border-[1px] xs:border-t-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain">
                <div className=" absolute md:right-[-18px] md:top-[-18px] cursor-pointer md:transform-none xs:right-1/2 xs:transform xs:translate-x-1/2 xs:top-[-50px]" onClick={() => props.setDlgToggle(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9564 11.866L8.09082 7.00022L12.9565 2.13448C13.2581 1.83285 13.2581 1.34522 12.9565 1.04359C12.6548 0.741963 12.1672 0.741963 11.8656 1.04359L6.99995 5.90933L2.13428 1.04359C1.83265 0.741963 1.34503 0.741963 1.04341 1.04359C0.741781 1.34522 0.741781 1.83285 1.04341 2.13448L5.90905 7.00022L1.04341 11.866C0.741781 12.1676 0.741781 12.6552 1.04341 12.9568C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1072 2.13428 12.9568L2.09892 12.9215L2.13428 12.9568L6.99993 8.09111L11.8656 12.9568C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1072 12.9564 12.9568L12.9211 12.9215L12.9564 12.9568C13.2581 12.6552 13.2581 12.1676 12.9564 11.866Z" fill="#5F5F63" stroke="#5F5F63" strokeWidth="0.1" />
                    </svg>
                </div>
                <div className=''>
                    <p className='text-center text-[24px] font-[500] text-white'>Confirmation Purchase</p>
                </div>
                <div className='h-[72px] rounded-[15px] bg-[#1D1D1E] flex p-[12px]'>
                    <Image src={selectedRoom.imgUrl} width={56} height={48} className='rounded-[10px]' />
                    <div className='ml-6'>
                        <div className='text-[#929298] text-[12px] font-[500] font-["outfit"]'>
                            {selectedRoom.collectionName}
                        </div>
                        <div className='text-white text-[16px] font-[500] font-["outfit"]'>
                            {selectedRoom.roomName.length > 20 ? selectedRoom.roomName.slice(0, 20) + "..." : selectedRoom.roomName}
                        </div>
                    </div>
                </div>
                <div className='divide-y divide-[#1D1F1F]'>
                    <div className='flex justify-between text-[14px] py-[16px]'>
                        <div className='text-[#929298]'>
                            Price of Room (Verse)
                        </div>
                        <div className='text-[#F3F3F3]'>
                            {selectedRoom.price}
                        </div>
                    </div>
                    <div className='flex justify-between text-[14px] py-[16px]'>
                        <div className='text-[#929298]'>
                            Connecting other users
                        </div>
                        <div className='text-[#F3F3F3]'>
                            {props.connectingOtherUsers ? "Possible" : "Impossible"}
                        </div>
                    </div>
                    <div className='flex justify-between text-[14px] pt-[16px]'>
                        <div className='text-[#929298]'>
                            Another Info
                        </div>
                        <div className='text-[#F3F3F3]'>
                            {props.anotherInfo}
                        </div>
                    </div>
                </div>
                <div className="">
                    <PrimaryButton caption={"Buy Room"} disabled={disabled} onClick={BuyRoom} />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationDlg