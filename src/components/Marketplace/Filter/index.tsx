import SearchBox from 'components/Common/Forms/SearchBox';
import { FilterIcon } from 'components/icons/FilterIcon';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Category from './Category';
import Collection from './Collection';
import FilterDlg from './FilterDlg';
import FilterItem, { FilterItemProps } from './FilterItem';

export interface FilterItemType {
  name: string;
  active: boolean;
}

export interface MenuProps {
  searchString: string;
  setSearchString: Function;
  categories: FilterItemProps[];
  collections: FilterItemProps[];
}

export default function Filter(props: MenuProps) {

  const [filterDlgToggle, setFilterDlgToggle] = useState(false);
  const [categories, setCategaries] = useState(props.categories);
  const [collections, setCollections] = useState(props.collections);

  useEffect(() => {
    console.log(categories)
  }, [categories])

  const setDlgToggle = (status) => {
    setFilterDlgToggle(status)
  }

  const onClickCategory = (index: number) => {
    let temp = categories;
    setCategaries(temp.map((t, _) => {
      if (_ == index) {
        return { name: t.name, active: true };
      }
      return { name: t.name, active: false };
    }));
  }

  const onClickCollection = (index: number) => {
    let temp = collections;
    setCollections(temp.map((t, _) => {
      if (_ == index) {
        return { name: t.name, active: true };
      }
      return { name: t.name, active: false };
    }));
  }

  return (
    <div>
      <div className='grid-cols-12 lg:grid md:grid sm:hidden xs:hidden'>
        <div className='col-span-3 flex'>
          <Category click={onClickCategory} catagories={categories} />
          <div className='justify-center items-center flex mx-auto'>
            <Image src={'/images/marketplace/line.png'} height={32} width={1} />
          </div>
        </div>

        <div className='col-span-9 relative w-fit`}'>
          <Collection click={onClickCollection} collections={collections} />
        </div>
      </div>
      <div className='md:hidden lg:hidden sm:hidden xs:flex justify-between'>
        <div className='basis-5/6'>
          <SearchBox setSearchString={props.setSearchString} searchString={props.searchString} />
        </div>
        <div
          className={`flex cursor-pointer w-[52px] h-[52px] rounded-[15px] border-[#272829] border-[2px] items-center justify-center bg-globalBgColor`} onClick={() => setDlgToggle(true)}>
          <FilterIcon />
        </div>
      </div>
      <FilterDlg dlgToggle={filterDlgToggle} setDlgToggle={setDlgToggle} />
    </div>
  )
}
