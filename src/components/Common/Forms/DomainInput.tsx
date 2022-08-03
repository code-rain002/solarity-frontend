import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { showErrorToast } from "utils";

const infoFormSchema = yup.object({
  domain: yup.string().required(),
  title: yup.string(),
});

const DomainInput = (props) => {
  const { changeValue, initValue, isError, setError } = props

  const [classFocus, setClassFocus] = useState('text-white/60');
  const [classBorder, setClassBorder] = useState('border-white/10');
  const [domainValue, setDomainValue] = useState('');
  const [domainFooter, setDomainFooter] = useState('.verse');

  const focusInput = () => {
    setClassFocus('top-[-15%] !text-[12px] text-primary');
    setClassBorder('border-primary');
  }
  const unFocusInput = () => {
    if (!domainValue) {
      setClassFocus('text-white/60');
      setClassBorder('border-white/10');
      setError("")
    } else {

    }
  }

  useEffect(() => {
    console.log(isError)
    if (isError) {
      setClassFocus('top-[-15%] !text-[12px] text-rose-500');
      setClassBorder('border-rose-500');
    } else {
      if (domainValue) {
        setClassFocus('top-[-15%] !text-[12px] text-primary');
        setClassBorder('border-primary');
      }
    }
  }, [domainValue, isError])

  return (
    <div className="w-full">
      <div className={`relative flex items-center rounded-[18px] border-[1.5px] py-2 px-2 ${classBorder}`}>
        <span className={`absolute bg-[#141416] text-[18px] px-2 tracking-[0.02rem] z-10 ${classFocus}`}>Claim your domain</span>
        <input className="appearance-none text-[18px] tracking-[0.02rem] bg-transparent z-50 border-r-2 border-white/10 w-full h-[48px] text-white/60 mr-3 py-1 px-2 leading-tight" onFocus={focusInput} onBlur={unFocusInput} onChange={(e) => { setDomainValue(e.target.value); changeValue(e.target.value ? (e.target.value + domainFooter) : "", "domain") }} value={domainValue} />
        <select className="block px-0 text-white bg-[#141416] border-0 peer text-[18px]" onChange={(e) => { setDomainFooter(e.target.value); changeValue(domainValue + e.target.value) }}>
          <option value=".verse">.verse</option>
          <option value=".sol">.sol</option>
        </select>
      </div>
    </div>
  );
};

export default DomainInput;