import React from 'react'
import FilterItem, { FilterItemProps } from '../FilterItem'

interface CategoryProps {
  catagories: FilterItemProps[];
  click: any;
}

function Category(props: CategoryProps) {
  return (
    <div className='flex gap-6'>
      {
        props.catagories.map((item, index) => (
          <div key={index} onClick={() => props.click(index)}>
            <FilterItem name={item.name} active={item.active}/>
          </div>
        ))
      }
    </div>
  )
}

export default Category