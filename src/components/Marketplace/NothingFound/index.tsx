
import { SearchIcon } from 'components/icons/SearchIcon'
import React from 'react'
import Items from '../Rooms/Items';

interface NothingFoundProps {
    searchString: string;
    setSearchString: any;
}

function NothingFound(props: NothingFoundProps) {

    const back = () => {
        props.setSearchString('')
    }

    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center mt-[116px]'>
                <div className='w-[170px] h-[170px] border-[1.2px] border-[#272829] rounded-[64px] flex justify-center content-center items-center '>
                    <SearchIcon />
                </div>
            </div>
            <div className='text-[#929298] text-[28px] text-center mt-[64px]'>
                Nothing was found for the query <span className='text-[#F3F3F3]'>"{props.searchString}"</span>
            </div>
            <div className='flex justify-center mt-[48px]'>
                <button onClick={back} className='text-primary font-[500px] font-["outfit"] border-[#929298] border-[1px] rounded-[15px] w-[119px] h-[52px] text-[16px] hover:border-primary'>Return back</button>
            </div>
            <div className='flex justify-center items-center gap-[16px] mt-[40px]'>
                <div className='flex flex-col divide-y divide-[#181A1A]'>
                    <div className='w-[116px]'></div>
                    <div className='w-[116px]'></div>
                </div>
                <div className='text-[#474749] text-[12px] font-[500] font-["outfit"]'>
                    OR
                </div>
                <div className='flex flex-col divide-y divide-[#181A1A]'>
                    <div className='w-[116px]'></div>
                    <div className='w-[116px]'></div>
                </div>
            </div>
            <div className='text-[24px] text-[#B3B3B7] font-["outfit"] font-[500] mt-[32px] text-center'>
                We can offer you other items
            </div>
            <div className='mt-[32px]'>
                <Items visitRoom={() => {}} />
            </div>
        </div>
    )
}

export default NothingFound