import Category from 'components/Marketplace/Filter/Category'
import NFTItems from 'components/Marketplace/NFTItems';
import Rooms from 'components/Marketplace/Rooms'
import React, { useState } from 'react'
import { categoriesData, rooms } from '../../../../../data/Community'

function FeedGallery({ visitRoom }) {

  const [filter, setFilter] = useState<string>('all');
  const [categories, setCategories] = useState(categoriesData)

  const onClickCategory = (index: number) => {
    let temp = categories;
    setCategories(temp.map((t, _) => {
      if (_ == index) {
        return { name: t.name, active: true };
      }
      return { name: t.name, active: false };
    }));
    switch (index) {
      case 0:
        setFilter('all')
        break;
      case 1:
        setFilter('room')
        break;
      default:
        setFilter('nft');
    }
  }

  return (
    <div className='my-[32px]'>
      <Category click={onClickCategory} catagories={categories} />
      {(filter === 'all' || filter === 'room') && <Rooms count={4} headerTitle='Rooms' rooms={rooms} visitRoom={visitRoom} />}
      {(filter === 'all' || filter === 'nft') && <NFTItems />}
    </div>
  )
}

export default FeedGallery