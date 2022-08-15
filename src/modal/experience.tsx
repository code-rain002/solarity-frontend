import { Component } from "react"

export type RoomMemberAvatarSmallDataType = {
    imgUrl : string
}

export type LiveRoomListDataType = {
    currentNumberOfMembers : number,
    imgUrl : string,
    walletIcon : any,
    collectionName : string,
    roomName : string,
    lgImgUrl : string,
}

export type ExploreRoomDataType = {
    imgUrl : string,
    walletIcon : any,
    collectionName : string,
    roomName : string,
}

export type PsuedoAvatarItemDataType = {
    imgUrl : string,
    title : string,
}

export type ChattingBoxDataType = {
    imgUrl : string,
    uName : string,
    before : string,
    text : string,
}