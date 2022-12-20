import React, { useEffect, useState } from 'react'
import { communities, games } from '../../../data/Community'
// import Communities from '../Communities';
import Header from './Header';
import Main from './Main';

export interface FeedProps {
  id: any;
  isPreview: boolean;
  visitRoom: any;
  type: string;
  setIsMarketplace: any;
  activeIndex: number;
  setActiveIndex: any;
}

function Feed(props: FeedProps) {
  let community: any = {};
  if (props.type === 'community') {
    community = communities[parseInt(props.id)];
  } else {
    community = games[parseInt(props.id)];
  }
  return (
    <div>
      <Header
        id={props.id}
        isPreview={props.isPreview}
        type={props.type}
        avatarUrl={community.avatarUrl}
        websiteUrl={community.websiteUrl}
        iframeUrl={community.iframeUrl ? community.iframeUrl: ""}
        backUrl={community.backUrl}
        title={community.communityName}
        description={community.description}
        walletAddress={community.walletAddress}
        icon={community.walletIcon}
      />
      <Main
        id={props.id}
        setIsMarketplace={props.setIsMarketplace}
        type={props.type}
        visitRoom={props.visitRoom}
        activeIndex={props.activeIndex}
        setActiveIndex={props.setActiveIndex}
      />
    </div>
  )
}

export default Feed