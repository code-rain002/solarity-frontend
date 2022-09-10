import Image from 'next/image'
import React from 'react'

export interface AvatarProps {
    imgUrl: string;

}

function Avatar(props: AvatarProps) {
  return (
    <div className='w-[48px] h-[48px] hover:border-primary hover:cursor-pointer rounded-[40px]'>
        <Image src={props.imgUrl} width={48} height={48} layout="responsive" className='rounded-[40px]' />
    </div>
  )
}

export default Avatar