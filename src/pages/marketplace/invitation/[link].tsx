import InvitationDlg from 'components/Marketplace/Invitation/InvitationDlg'
import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image'

function Invitation() {

    const { asPath } = useRouter();
    const roomId = asPath.replace("/marketplace/invitation/", "");

    return (
        <div className='flex md:justify-center lg:justify-center xs:justify-end sm:justify-end'>
            <div className='lg:block md:block sm:hidden xs:hidden'>
                <Image
                    src={`/images/experience/room_images/room_${parseInt(roomId) + 1
                        }.jpg`}
                    layout="fill"
                />
            </div>
            <div className='lg:hidden md:hidden sm:block xs:block w-full absolute right-0 top-0'>
                <Image
                    src={`/images/experience/room_images/room_${parseInt(roomId) + 1
                        }.jpg`}
                    width={1346} height={496}
                    layout="responsive"
                />
            </div>
            <div className='flex h-screen
                            lg:w-[736px] md:w-[736px] sm:w-full xs:w-full
            '>
                <InvitationDlg invitor={'Konstantin1982.sol'} />
            </div>

        </div>

    )
}

export default Invitation