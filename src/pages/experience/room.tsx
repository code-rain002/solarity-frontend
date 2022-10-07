import React, { useState } from "react"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import MainScr from "components/Experience/RoomInterior/MainScr"


const Room = () => {

  const [percentage, setPercetage] = useState(0);

  // const load_percentage = setTimeout(() => {
  //   percentage < 100 ? setPercetage(percentage + 1) : clearTimeout(load_percentage)
  // }, 10)
  return (
    <div className={` h-full w-full `}>
      <LoadingScr percentage={percentage} />
      <MainScr percentage={percentage} setPercetage={setPercetage} />
    </div>
  )
}

export default Room