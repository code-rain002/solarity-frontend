import React, { useState } from "react"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import MainScr from "components/Experience/RoomInterior/MainScr"


const Room = () => {

  return (
    <div className={` h-full w-full `}>
      <LoadingScr />
      <MainScr />
    </div>
  )
}

export default Room