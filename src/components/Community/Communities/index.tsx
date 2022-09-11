import React from 'react'
import { communities } from '../../../data/Community'
import Item from './Item'


function Communities() {
    return (
        <div>
            <div className='mt-[32px] text-[28px] text-[#F3F3F3] font-["outfit"] font-[500] gap-2'>Communities <span className='text-[#474749]'>{communities.length}</span></div>
            <div className='grid custom-2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-[32px] mt-[40px]'>
                {
                    communities.map((community, index) => (
                        <Item key={index} id={index} avatarUrl={community.avatarUrl} backUrl={community.backUrl} communityName={community.communityName} memberNumber={community.memberNumber} icon={community.icon} />
                    ))
                }
            </div>
        </div>
    )
}

export default Communities