import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import BackButton from "components/Marketplace/RoomSettings/BackButton";
import TopRightMenu from "components/Marketplace/RoomSettings/TopRightMenu";
import GeneralInfoBox from "components/Marketplace/RoomSettings/GeneralInfoBox";
import SuccessfulDlg from "components/Marketplace/RoomSettings/SuccessfulDlg";
import FirstEditRoom from './FirstEditRoom';
import SecondEditRoom from './SecondEditRoom';
import ThirdEditRoom from './ThirdEditRoom';
import freeObjectFromMemory from "utils/clearObject";
import { ROOMS_ASSET } from 'data/Room';
const EditRoom = (props) => {
  const router = useRouter();
  const { no } = router.query;
  const { rooms } = props.user;
  const { visitFlag } = useSelector(state => ({
    visitFlag: state.profile.visitFlag
  }))
  const [mounted, setMounted] = useState(false);
  const [roomInfo, setRoomInfo] = useState({});
  const [picNo, setPicNo] = useState(0);
  const [chooseFlag, setChooseFlag] = useState(false);
  const [successDlgToggle, setSuccessDlgToggle] = useState(false);
  const [isHold, setIsHold] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    require("aframe/dist/aframe-master.js");
    require('aframe-liquid-portal-shader');
    require("utils/chat/components");
    //@ts-ignore
    THREE.Cache.enabled = false;
    if(!!AFRAME.components["cursor-listen"])
      delete AFRAME.components["cursor-listen"];
    AFRAME.registerComponent("cursor-listen", {
      schema: {
        picno: { default: 0 },
      },
      init: function () {
        this.el.addEventListener("click", (e) => {
          if(!!window.picState && !!window.picNo && window.picNo == this.attrValue.picno) {
            window.picState = false;
          } else {
            setPicNo(this.attrValue.picno);
            window.picNo = this.attrValue.picno;
            window.picState = true;
            document.exitPointerLock();
          }
        });
        this.el.addEventListener("mouseenter", (e) => {
          if (!!document.querySelector("#cursor"))
            document
              .querySelector("#cursor")
              .setAttribute("material", "color", "red");
        });
        this.el.addEventListener("mouseleave", (e) => {
          if (!!document.querySelector("#cursor"))
            document
              .querySelector("#cursor")
              .setAttribute("material", "color", "white");
        });
      },
    });
  }, []);

  useEffect(() => {
    if (!!rooms && rooms.length != 0) {
      var roomIndex = -1;
      if(no != "") {
        roomIndex = rooms.findIndex(s => s.roomNo == no);
      } else {
        roomIndex = rooms.findIndex(s => s.active == true);
      }
      if(roomIndex != -1) {
        setRoomInfo(rooms[roomIndex]);
      }
    }
  }, [rooms])

  useEffect(() => {
    if (roomInfo == {} || no == undefined) {
      setMounted(false);
    } else {
      setMounted(true);
    }
  }, [roomInfo, no])

  useEffect(() => {
    if (chooseFlag) {
      var size = ROOMS_ASSET[parseInt(no)].size;
      var frameEl = document.querySelector(`.picno${picNo}`);
      var frame_imageEL = document.createElement("a-image");
      frameEl.appendChild(frame_imageEL);
      frame_imageEL.setAttribute("src", imageUrl);
      frame_imageEL.setAttribute("width", size);
      frame_imageEL.setAttribute("height", size);
      frame_imageEL.setAttribute("position", { x: 0, y: 0, z: 0.01 });
      window.picState = false;
      setChooseFlag(false);
      setPicNo("0");
    }
  }, [chooseFlag]);

  const SetSuccessDlgToggle = (status) => {
    setSuccessDlgToggle(status);
  }

  const gotoProfile = () => {
    // Clear memory
    var objectsToDelete = [];
    var items = document.querySelectorAll(".model-loaded");
    for (var iIndex = 0; iIndex < items.length; iIndex++) {
      objectsToDelete.push(items[iIndex]);
    }
    var scene = document.querySelector("scene");
    objectsToDelete.push(scene);
    for (var i = 0; i < objectsToDelete.length; i++) {
      if (!!objectsToDelete[i]) {
        freeObjectFromMemory(objectsToDelete[i].object3D, objectsToDelete[i]);
      }
    }

    //Link
    if(visitFlag == 0) {
      router.push(`/${props.user.username}/profile`);
    } else if (visitFlag == 1) {
      router.push(`/marketplace`);
    }
  }

  return (
    <div>
      {mounted && (
        <div>
          {no == '0' && (
            <FirstEditRoom no={no} roomInfo={roomInfo} visitFlag={visitFlag} />
          )}
          {no == '1' && (
            <SecondEditRoom no={no} roomInfo={roomInfo} visitFlag={visitFlag} />
          )}
          {no == '2' && (
            <ThirdEditRoom no={no} roomInfo={roomInfo} visitFlag={visitFlag} />
          )}
        </div>
      )}
      {visitFlag == 1 && (
        <div>
          <div onClick={gotoProfile}>
            <BackButton />
          </div>
          <TopRightMenu Complete={setSuccessDlgToggle} isHold={isHold} setIsHold={setIsHold} />
          {props.user && props.user.solanaAddress && (
            <GeneralInfoBox user={props.user} isHold={isHold} roomNo={no} picNo={picNo} imageUrl={imageUrl} setImageUrl={setImageUrl} setDlgToggle={setSuccessDlgToggle} chooseFlag={chooseFlag} setChooseFlag={setChooseFlag} />
          )}
          <SuccessfulDlg username={props.user.username} dlgToggle={successDlgToggle} setDlgToggle={setSuccessDlgToggle} />
        </div>
      )}
    </div>
  );
}

export default EditRoom;