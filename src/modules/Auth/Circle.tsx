import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const Circle = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let temp = percent
    var timer = setInterval(() => {
      if (temp == (step-1)*20) clearInterval(timer)
      setPercent(temp)
      if (temp < (step-1)*20) temp++;
      if (temp > (step-1)*20) temp--;
    }, 10)
  }, [step]);

  return (
    <div className="px-10">
      <div
        className={`relative h-full w-full`}
      >
        <div className="w-[210px] h-[210px] sm:w-[330px] sm:h-[330px] m-auto">
          <div className="text-white items-center flex h-full">
            <div className="text-center m-auto h-full w-full">
              <div className="progress relative h-full w-full register">
                <svg className="circle-loading-bar hidden sm:block w-full h-full">
                  <circle cx="165" cy="165" r="120"></circle>
                  <circle
                    cx="165"
                    cy="165"
                    r="120"
                    style={{ "--percent": percent }}
                  ></circle>
                </svg>
                <div className={`absolute ${percent < 10 ? 'sm:left-[130px]' : 'sm:left-[115px]'} top-[60px] left-[65px] sm:top-[90px] `}>
                  <h2 className="loading-status text-[40px] sm:text-[70px] font-bold font-['Outfit'] mb-2 sm:mb-5">
                    {percent}<span className="text-[44px]">%</span>
                  </h2>
                  <span className="text-xs sm:text-lg">{(step-1)*20}/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
