import React from 'react'

export type LabelProps = {
    name: string;
    count: number;
}

function Label(props: LabelProps) {
    return (
        <div className='flex'>
            <p className='text-white p-1'>{props.name}</p>
            <p className='text-[#474749] p-1'>{props.count}</p>
        </div>
    )
}

export default Label