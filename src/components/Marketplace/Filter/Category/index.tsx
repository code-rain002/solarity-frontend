import React from 'react'
import FilterItem, { FilterItemProps } from '../FilterItem'

interface CategoryProps {
  catagories: FilterItemProps[];
  activeCategory: string;
  click: any;
}

function Category(props: CategoryProps) {
  return (
    <div className='flex gap-6'>
      {
        props.catagories.map((item, index) => (
          <div key={index} onClick={() => props.click(item.name)}>
            <FilterItem name={item.name} active={item.name == props.activeCategory} />
          </div>
        ))
      }
    </div>
  )
}

export default Category