import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';

export interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = (props: AccordionProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className='rounded-2xl bg-gradient-linear p-[24px] my-6'>
      <div className="cursor-pointer" onClick={() => setOpened(!opened)}>
        <h1 className='text-white text-[16px] sm:text-[26px] mb-1 inline-block'>{props.title}</h1>
        <i className={"pr-[10px] float-right my-2 text-primary fa "+(opened?"fa-minus":"fa-plus")}></i>
      </div>
      <div className={opened?"":"h-0 leading-0 overflow-hidden"}>
        <br></br>
        <p className='text-white text-[14px] sm:text-[18px] text-content my-2'>{props.description}</p>
      </div>
    </div>
  );
};

export default Accordion;