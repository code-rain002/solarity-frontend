import SearchBox from 'components/Common/Forms/SearchBox';
import { FilterIcon } from 'components/icons/FilterIcon';
import { categoriesData, collectionsData } from 'data/Marketplace';
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
  list: FilterItemType[];
  searchString: string;
  setSearchString: Function;
}

export default function Filter(props: MenuProps) {

  const [filterDlgToggle, setFilterDlgToggle] = useState(false);
  const [categories, setCategaries] = useState(categoriesData);
  const [collections, setCollections] = useState(collectionsData);

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
      <div className='grid-cols-12 lg:grid md:grid sm:hidden xs:hidden mt-[36px]'>
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
      <div className='md:hidden flex justify-between'>
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
