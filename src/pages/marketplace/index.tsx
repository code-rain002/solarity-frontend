import React, { useState } from "react"

import Marketplace from "modules/Marketplace"
import Layout from "components/Layout"
import MarketplaceBanner from "modules/Marketplace/MarketplaceBanner"
import { rooms } from "data/Marketplace"
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item"
import ConfirmationDlg from "components/Marketplace/ConfirmationDlg"
import RoomDlg from "components/Marketplace/Rooms/RoomDlg"
import NothingFound from "components/Marketplace/NothingFound"
import Image from "next/image"
import BackButton from "components/Marketplace/RoomSettings/BackButton"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    // const [activeRoom, setActiveRoom] = useState("room_1")
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([false, "join"])
    const [activeRoomId, setActiveRoomId] = useState(0)
    const [previewImg, setPreviewImg] = useState(rooms[0].imgUrl)
    const [previewTitle, setPreviewTitle] = useState(rooms[0].collectionName)
    const [previewSubtitle, setPreviewSubtitle] = useState(rooms[0].roomName)
    const [previewPrice, setPreviewPrice] = useState(rooms[0].price)
    const [confirmationDlgToggle, setConfirmationDlgToggle] = useState(false)
    const [previewDlgToggle, setPreviewDlgToggle] = useState(false)
    const [roomId, setRoomId] = useState(0)
    const [searchString, setSearchString] = useState('')
    const [isExpand, setIsExpand] = useState(false)

    const Buy = () => {
        setConfirmationDlgToggle(true);
    }

    const ConfirmationDlgToggle = (open: boolean) => {
        setConfirmationDlgToggle(open)
    }

    const PreviewDlgToggle = (open: boolean) => {
        setPreviewDlgToggle(open)
    }

    const VisitRoom = (roomInfo: RoomItemProps, index: number) => {
        setPreviewTitle(roomInfo.collectionName)
        setPreviewSubtitle(roomInfo.roomName)
        setPreviewPrice(roomInfo.price)
        setPreviewImg(roomInfo.imgUrl)
        setPreviewDlgToggle(true)
        setRoomId(index)
    }

    const expandRoom = (status: boolean) => {
        setIsExpand(status);
    }

    return (
        <>
            {!isExpand ? <Layout
                sidebarToggler={sidebarToggler}
                searchString={searchString}
                setSearchString={setSearchString}
                banner={searchString === '' && <div>
                    <div className='font-[500] text-[24px] text-white p-[24px] pl-[0px] md:hidden'>
                        Marketplace
                    </div>
                    <MarketplaceBanner isDlg={false} title={previewTitle} subtitle={previewSubtitle} description={'The user immediately has a preview of the first room in the list.'} price={previewPrice} activeRoom={previewImg} buy={Buy} expandRoom={expandRoom} isExpand={isExpand} />
                </div>}
                onClick={() => setSidebarToggler(!sidebarToggler)}
            >
                {
                    searchString !== '' ? (
                        <>
                            <NothingFound setSearchString={setSearchString} searchString={searchString} />
                        </>
                    ) : (
                        <>
                            <Marketplace visitRoom={VisitRoom} searchString={searchString} setSearchString={setSearchString} />
                            <ConfirmationDlg id={roomId} roomName={previewSubtitle} collectionName={previewTitle} price={previewPrice}
                                dlgToggle={confirmationDlgToggle} setDlgToggle={ConfirmationDlgToggle} imgUrl={previewImg} numberOfFrames={52} connectingOtherUsers={true} anotherInfo={"Room Info"} />
                            <RoomDlg title={previewTitle} subtitle={previewSubtitle} description={'The user immediately has a preview of the first room in the list.'} price={previewPrice} activeRoom={previewImg} buy={Buy} dlgToggle={previewDlgToggle} setDlgToggle={PreviewDlgToggle} isDlg={true} expandRoom={expandRoom} isExpand={isExpand} />
                        </>
                    )
                }
            </Layout> : <div>
                <Image
                    src={`/images/experience/room_images/room_${roomId + 1}.jpg`}
                    layout="fill"
                />
                <div onClick={() => expandRoom(false)}>
                <BackButton />
                </div>
            </div>}
        </>
    )
}

export default ProfileIndex