import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";

const RoomDemo = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));

  return (
    <div className="rounded-[20px] border-[1px] border-primary bg-[#1a1a1c] p-3">
      
    </div>
  );
};

export default RoomDemo;
