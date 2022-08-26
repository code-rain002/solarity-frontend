import { LeftArrow, RightArrow } from 'components/icons';
import React from 'react'
import FilterItem, { FilterItemProps } from '../FilterItem';

interface CollectionProps {
    collections: FilterItemProps[];
    click: any;
}

function Collection(props: CollectionProps) {

    const rightScroll = () => {
        document.querySelector('.filter').scrollLeft += 80;
        document.querySelector('.left-scroll').classList.remove('hidden')
        document.querySelector('.left-scroll').classList.add('block')
    }

    const leftScroll = () => {
        document.querySelector('.filter').scrollLeft -= 80;
        if (document.querySelector('.filter').scrollLeft <= 0) {
            document.querySelector('.left-scroll').classList.remove('block')
            document.querySelector('.left-scroll').classList.add('hidden')
        }
    }

    return (
        <>
            <div className={`filter flex gap-6 h-30 w-[100%] relative cursor-pointer overflow-y-hidden overflow-x-hidden scroll-smooth md:flex-nowrap xs:flex-wrap`}>
                {
                    props.collections.map((item, index) => (
                        <div onClick={() => props.click(index)} >
                            <FilterItem key={index} name={item.name} active={item.active} />
                        </div>
                    ))
                }
            </div>
            <div className="right-scroll absolute right-[0px] text-white top-1/2 transform -translate-y-1/2 md:block">
                <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[25px] pr-[10px] h-[63px] md:block xs:hidden"><RightArrow /></button>
            </div>
            <div className="left-scroll absolute left-[0px] text-white top-1/2 transform -translate-y-1/2 hidden">
                <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[25px] pl-[10px] h-[63px]"><LeftArrow /></button>
            </div>
        </>
    )
}

export default Collection