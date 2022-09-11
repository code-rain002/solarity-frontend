import React from 'react'
import { communities } from '../../../data/Community'
import Header from './Header';
import Main from './Main';

export interface FeedProps {
  id: string;
  isPreview: boolean;
  visitRoom: any;
  setIsMarketplace: any;
  activeIndex: number;
  setActiveIndex: any;
}

function Feed(props: FeedProps) {
  return (
    <div>
      <Header isPreview={props.isPreview} avatarUrl={communities[parseInt(props.id)].avatarUrl} backUrl={communities[parseInt(props.id)].backUrl} title={communities[parseInt(props.id)].communityName} description={communities[parseInt(props.id)].description} walletAddress={communities[parseInt(props.id)].walletAddress} icon={communities[parseInt(props.id)].walletIcon} />
      <Main setIsMarketplace={props.setIsMarketplace} visitRoom={props.visitRoom} activeIndex={props.activeIndex} setActiveIndex={props.setActiveIndex} />
    </div>
  )
}

export default Feed