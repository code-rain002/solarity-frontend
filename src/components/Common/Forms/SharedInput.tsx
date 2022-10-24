import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const DomainInput = (props) => {
  const { changeValue, caption } = props;
  const { query: { title } } = useRouter();

  const [classFocus, setClassFocus] = useState('text-white/60');
  const [classBorder, setClassBorder] = useState('border-white/10');
  const [titleValue, setTitleValue] = useState<any>('');
  const focusInput = () => {
    setClassFocus('top-[-15%] !text-[12px] text-primary');
    setClassBorder('border-primary');
  }
  const unFocusInput = () => {
    if (!titleValue) {
      setClassFocus('text-white/60');
      setClassBorder('border-white/10');
    } else {

    }
  }

  useEffect(() => {
    if (titleValue) {
      setClassFocus('top-[-15%] !text-[12px] text-primary');
      setClassBorder('border-primary');
    }
  }, [titleValue])

  useEffect(() => {
    if (title) {
      setTitleValue(title);
    }
  }, [title])

  return (
    <div className="w-full">
      <div className={`relative flex items-center rounded-[18px] border-[1.5px] py-2 px-2 ${classBorder}`}>
        <span className={`absolute bg-[#141416] text-[18px] px-2 tracking-[0.02rem] z-10 ${classFocus}`}>{caption}</span>
        <input className="appearance-none text-[18px] tracking-[0.02rem] bg-transparent z-50 w-full h-[48px] text-white/60 mr-3 py-1 px-2 leading-tight" onFocus={focusInput} onBlur={unFocusInput} onChange={(e) => { setTitleValue(e.target.value); changeValue(e.target.value, "title") }} value={titleValue} />
      </div>
    </div>
  );
};

export default DomainInput;