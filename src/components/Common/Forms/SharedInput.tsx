import React, { useState, useEffect } from "react";

const DomainInput = (props) => {
  const [classFocus, setClassFocus] = useState('text-white/60');
  const [classBorder, setClassBorder] = useState('border-white/10');
  const [titleValue, setTitleValue] = useState('');
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
    // if (props.value) {
    //   focusInput()
    //   props.changeValue(props.value)
    //   setTitleValue(props.value)
    // }
  }, [])

  return (
    <div className="w-full">
      <div className={`relative flex items-center rounded-[18px] border-[1.5px] py-2 px-2 ${classBorder}`}>
        <span className={`absolute bg-[#141416] text-[18px] px-2 tracking-[0.02rem] z-10 ${classFocus}`}>{props.caption}</span>
        <input className="appearance-none text-[18px] tracking-[0.02rem] bg-transparent z-50 w-full h-[48px] text-white/60 mr-3 py-1 px-2 leading-tight" onFocus={focusInput} onBlur={unFocusInput} onChange={(e) => { setTitleValue(e.target.value); props.changeValue(e.target.value) }} value={titleValue} />
      </div>
    </div>
  );
};

export default DomainInput;