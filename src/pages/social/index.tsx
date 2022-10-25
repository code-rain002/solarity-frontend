import React, { useEffect, useState } from "react"

import Social from "modules/Social"
import Layout from "components/Layout"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import ACTIONS from "config/actions"
import { setFriends, setName, setOnline, setTypingState, setUserMsg } from "redux/slices/chatSlice"
import socket from "utils/socket-client"
import { eqArraySets } from "utils"

const ProfileIndex = () => {
  const dispatch = useDispatch();

  const [sidebarToggler, setSidebarToggler] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      dispatch(setName(localStorage.getItem("name")));
    }
    initSocket();
  }, [])

  const initSocket = () => {
    // This part is main for socket.
    if (!(window as any).socket) {
      setTimeout(() => {
        initSocket();
      }, 100);
      return;
    }

    if (!(window as any).listen) {
      (window as any).socket.on(ACTIONS.USER_INFO_EXTENSION, (friends) => {
        dispatch(setFriends(friends));
      });

      (window as any).socket.on(ACTIONS.ADD_USER_EXTENSION, (data) => {
        dispatch(setOnline(data));
      });

      (window as any).socket.on(ACTIONS.TYPING_STATE, (data) => {
        if (eqArraySets((window as any).members, data.members)) {
          dispatch(setTypingState({ state: data.state, name: data.name, typingMembers: (window as any).typingMembers }));
        }
      });

      (window as any).socket.on(ACTIONS.SEND_MSG_EXTENSION, (msg) => {
        if (!!msg) {
          if (!msg.groupType) {
            dispatch(setUserMsg(msg));
          }
          if (msg.members[0] != localStorage.getItem('name')) {
          }
        }
      });
      (window as any).listen = true;
    }
  }

  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<div></div>}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <Social />
    </Layout>
  )
}

export default ProfileIndex