import React from "react";
import Link from "next/link";

const LockedRoom = () => {
  return (
    <Link
      href={
        "/marketplace"
      }
    >
      <div className="absolute flex bottom-5 p-[5px] right-10 rounded-full cursor-pointer" style={{background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(30px)"}}>
          <div className="w-7 h-7 bg-white rounded-full">
            <img src="/models/images/lock.png" className="m-auto pt-[5px]" alt="locked" width={13} height={17} />
          </div>
          <span className="ml-2 text-sm mr-4 pt-[5px]">Unlock</span>
      </div>
    </Link>
  );
};

export default LockedRoom;
