import React from 'react'
import Item, { NFTItemProps } from './Item';

export interface NFTItemsProps {
  items: NFTItemProps[];
}

export default function Items(props: NFTItemsProps) {
  return (
    <div className='relative w-full mt-[22px]'>
      <div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-[1000] text-white' style={{ backgroundColor: 'rgba(25, 25, 25, 0.99)' }}>
        Comming Soon...
      </div>
      <div className='nft-items flex gap-7 h-30 w-[100%] relative cursor-pointer overflow-y-hidden overflow-x-hidden scroll-smooth flex-nowrap'>
        {
          props.items.map((item, index) => (
            <Item name={item.name} key={index} description={item.description} id={item.id} value={item.value} icon={item.icon} imgUrl={item.imgUrl} />
          ))
        }
      </div>
    </div>
  )
}
