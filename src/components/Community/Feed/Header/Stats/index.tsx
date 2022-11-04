import React, { useEffect, useState } from 'react'
import StatsItem from './StatsItem'
import { MembersIcon } from "components/Community/Feed/Header/Stats/icons/MembersIcon";
import { TotalSupplyIcon } from "components/Community/Feed/Header/Stats/icons/TotalSupplyIcon";
import { FloorPriceIcon } from "components/Community/Feed/Header/Stats/icons/FloorPriceIcon";
import { communities, stats } from '../../../../../data/Community'

type StatsType = {
  id: any;
}

function Stats(props: StatsType) {
  const [community, setCommunity] = useState<any>({});

  useEffect(() => {
    setCommunity(communities[parseInt(props.id)]);
  }, [])

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-[24px]'>
      <StatsItem key={0} icon={<MembersIcon />} count={community.memberNumber} name={"Members"} />
      <StatsItem key={1} icon={<TotalSupplyIcon />} count={community.totalSupply} name={"Total supply"} />
      <StatsItem key={2} icon={<FloorPriceIcon />} count={2.3} unit={"SOL"} name={"Floor price"} />
    </div>
  )
}

export default Stats