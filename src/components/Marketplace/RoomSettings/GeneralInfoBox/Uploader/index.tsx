import { GalleryIcon } from 'components/icons/GalleryIcon'
import React from 'react'

function Uploader() {

  // document.querySelector('.abc').dispatchEvent()

  return (
    <div className="abc flex border-dashed border-[1.5px] border-[#272829] h-[96px] rounded-[15px] p-[24px] hover:border-primary gap-[24px]">
      <GalleryIcon />
      <div className='flex flex-col justify-between'>
        <div className='text-white'>Drop image or <span className='text-primary'>browse</span></div>
        <div className='text-[#474749] text-[14px] font-["outfit"]'>JPG, JPEG2000, PNG</div>
      </div>
    </div>
  )
}

export default Uploader