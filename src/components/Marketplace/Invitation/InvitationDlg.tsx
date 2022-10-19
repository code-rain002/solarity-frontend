import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

import { GroupIcon } from 'components/icons/GroupIcon';
import { KeySecureIcon } from 'components/icons/KeySecureIcon';
import WalletSelector from "components/Experience/WalletSelector";
import InvitationAvatar from './Avatar';
import Card from './Card';
import { login } from 'redux/slices/authSlice';

interface InvitationDlgProps {
    invitor: string;
    imgUrl: string;
}

function InvitationDlg(props: InvitationDlgProps) {
    const dispatch = useDispatch();
    const { setVisible } = useWalletModal();
    const { wallet, connect, connecting, publicKey, signMessage } = useWallet();
    const { logged, profileData } = useSelector((state: RootStateOrAny) => ({
        logged: state.auth.logged,
        profileData: state.profile.data,
    }));

    const [show, setShow] = useState(false);

    const closeDlg = () => {

    }

    const connectWallet = () => {

    }

    const joinToggle = () => {

    }

    return (
        <div className='
            lg:relative md:relative sm:absolute xs:absolute 
            lg:bottom-0 md:bottom-0 sm:bottom-[40px] xs:bottom-[40px]
            backdrop-blur-[20px] bg-[#131314] 
            border-[#1D1F1F]
            lg:border-[1px] md:border-[1px] sm:border-t[1px] xs:border-[1px]
            rounded-[25px]
            lg:w-[736px] md:w-[736px] sm:w-full xs:w-full 
            lg:h-[448px] md:h-[448px] sm:h-[711px] xs:h-[711px] 
            pt-[32px] pb-[40px] px-[40px] lg:m-auto md:m-auto xs:m-0 sx:m-0'
        >
            <WalletSelector
                darkBackground
                type="all"
                title="Login with Wallet"
                subtitle="Select a wallet from the list below"
                open={show}
                onClose={() => setShow(false)}
                onSelect={(address, type, provider) => {
                    dispatch(
                        login({
                            publicKey: address,
                            walletType: type,
                            provider,
                        })
                    );
                }}
            />
            <div className='flex flex-col gap-[24px]'>
                <div className='text-white text-[24px] font-[500] font-["outfit"]'>Invitation to the room</div>
                <div className='flex gap-3'>
                    <InvitationAvatar imgUrl={props.imgUrl} verified={false} />
                    <div className='text-[14px] font-[400px] text-[#929298]'>
                        <span className='text-primary'>{props.invitor}</span>&nbsp;created current room.
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6'>
                    <Card
                        icon={<GroupIcon />}
                        title={'Playing as a guest'}
                        subtitle={'Your information will be locally stored and your experience limited'}
                        buttonTitle={'Join as guest'}
                        active={false}
                        onClick={() => { }}
                    />
                    <Card
                        icon={<KeySecureIcon />}
                        title={'Playing after you login'}
                        subtitle={'Connect your account to fully enjoy in a room!'}
                        buttonTitle={logged ? "Join a Room" : publicKey ? "Login With Wallet" : "Connect Wallet"}
                        active={true}
                        connecting={connecting}
                        joinToggle={joinToggle}
                        logged={logged}
                        setShow={setShow}
                    />
                </div>
            </div>
        </div>
    )
}

export default InvitationDlg