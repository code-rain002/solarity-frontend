import React, {useState} from "react";

const DomainInput = (props) => {
  const [classFocus, setClassFocus] = useState('text-white/60');
  const [classBorder, setClassBorder] = useState('border-white/10');
  const [domainValue, setDomainValue] = useState('');
  const [domainFooter, setDomainFooter] = useState('.sol');
  const focusInput = () => {
    setClassFocus('top-[-15%] !text-[12px] text-primary');
    setClassBorder('border-primary');
  }
  const unFocusInput = () => {
    if(!domainValue){
      setClassFocus('text-white/60');
      setClassBorder('border-white/10');
    } else {
      
    }
  }
  return (
    <div className="w-full">
      <div className={`relative flex items-center rounded-[18px] border-[1.5px] py-2 px-2 ${classBorder}`}>
        <span className={`absolute bg-[#141416] text-[18px] px-2 tracking-[0.02rem] z-10 ${classFocus}`}>Claim your domain</span>
        <input className="appearance-none text-[18px] tracking-[0.02rem] bg-transparent z-50 border-r-2 border-white/10 w-full h-[48px] text-white/60 mr-3 py-1 px-2 leading-tight" onFocus={focusInput} onBlur={unFocusInput} onChange={(e) => {setDomainValue(e.target.value);props.changeValue(e.target.value?(e.target.value + domainFooter):"")}} value={domainValue} />
        <select className="block px-0 text-white bg-[#141416] border-0 peer text-[18px]" onChange={(e) => {setDomainFooter(e.target.value);props.changeValue(domainValue + e.target.value)}}>
          <option value=".verse">.verse</option>
          <option value=".sol">.sol</option>
        </select>
      </div>
    </div>
  );
};

export default DomainInput;