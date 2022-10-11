import React, { useState } from "react"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import MainScr from "components/Experience/RoomInterior/MainScr"


const Room = () => {

  const [percentage, setPercetage] = useState(0);

  return (
    <div className={` h-full w-full `}>
      <LoadingScr percentage={percentage} />
      <MainScr percentage={percentage} setPercetage={setPercetage} />
    </div>
  )
}

export default Room