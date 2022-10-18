import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import BackButton from "./BackButton";
import ChattingBox from "./ChattingBox";
import TopRightMenu from "./TopRightMenu";
import UsersBox from "./UsersBox";
import SettingBox from "./RoomSettingBox";
import { checkBrowser } from "utils";
import { useWebRTC } from 'hooks/useWebRTC';
import { apiCaller } from "utils/fetcher";
import { build_loadingScreen } from "utils/chat/loadingScreen";
import { models } from "data/Experience";
import {
  chooseControls,
  intersected,
  intersectedCleared,
  passControls,
} from "utils/chat/settings";
import { startHub } from "utils/chat/hubUtils";
import ChatPublicModel from "./RoomModels/ChatPublicModel";
import ChatPrivateModel from "./RoomModels/ChatPrivateModel";
import ACTIONS from "config/actions";
import { setMsg, setPeers } from "redux/slices/chatSlice";
import freeObjectFromMemory from "utils/clearObject";

type MainScrTyp = {
  percentage: number;
  setPercetage: Function;
};

const MainScr = (props: MainScrTyp) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [leftSideActive, setLeftSideActive] = useState("");
  const [usersBoxActive, setUsersBoxActive] = useState(false);
  const [roomIndex, setRoomIndex] = useState(-1);
  const [roomInfo, setRoomInfo] = useState({});
  const [userlist, setUserlist] = useState([]);
  const [isMute, setMute] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [intervalId, setIntervalId] = useState<any>("");
  const [isMobile, setIsMobile] = useState(false);
  const [volumes, setVolumes] = useState({});

  const { rid, roomType, no } = router.query;
  const { userName, rooms, profileData, msgs, modelIndex } = useSelector((state: RootStateOrAny) => ({
    userName: state.chat.userName,
    rooms: state.chat.rooms,
    profileData: state.profile.data,
    msgs: state.chat.msgs,
    modelIndex: state.chat.modelIndex,
  }));
  const { clients, provideRef, handleMute } = useWebRTC(rid, {
    name: userName ? userName : typeof window !== "undefined" ? localStorage.getItem('userName') : "",
    avatarUrl: profileData ? profileData.profileImageLink : "",
  })

  useEffect(() => {
    getUsers();
    setRoomIndex(rooms.findIndex((s) => s.roomId == rid));
  }, [rooms]);

  useEffect(() => {
    setIsMobile(checkBrowser())
  }, [])

  useEffect(() => {
    const getRoomInfo = async () => {
      const {
        data: { roomInfoData },
      } = await apiCaller.get(
        `/users/getRoomInfo/${rooms[roomIndex].name}/${rooms[roomIndex].roomNo}`
      );
      if (roomInfoData) {
        setRoomInfo(roomInfoData);
      }
    }

    if (rooms && rooms.length != 0 && rooms[roomIndex] && rooms[roomIndex].name) {
      getRoomInfo();
    }
  }, [rooms, roomIndex]);

  const getUsers = async () => {
    var roomIndex1 = rooms.findIndex((s) => s.roomId == rid);
    if (roomIndex1 != -1) {
      rooms[roomIndex1].speakers.map((speaker, index) => {
        const user = {
          username: speaker,
          link: rooms[roomIndex1].links[index],
        };
      });
      setUserlist([]);
    }
  };

  useEffect(() => {
    handleMute(!isMute, userName);
  }, [isMute]);

  useEffect(() => {
    require("aframe/dist/aframe-master.js");
    require("aframe-liquid-portal-shader");
    require("aframe-blink-controls");
    require("aframe-extras");
    require("utils/chat/components");
    require("utils/chat/presentation");
    //@ts-ignore
    THREE.Cache.enabled = false;
    setMounted(true);
    localStorage.setItem("modelLoaded", "false");
    require("multiuser-aframe");
    const loadInterval = setInterval(() => {
      if (localStorage.getItem("modelLoaded") == "true") {
        clearInterval(loadInterval);
        setLoadingFlag(true);
      }
    }, 300);
  }, []);

  useEffect(() => {
    var clearLoading = setInterval(() => {
      var sceneEl = document.querySelector("a-scene");
      var loadingScreenEl = document.getElementById("loadingScreen");
      var loadingTextEl = document.getElementById("loadingText");
      var loadingBarEl = document.getElementById("loadingBar");
      if (sceneEl && loadingTextEl && loadingBarEl && loadingScreenEl) {
        build_loadingScreen();
      }
      clearInterval(clearLoading);
    }, 300);
  }, []);

  const start_scene = () => {
    if (roomType == "0") startHub();
    if (roomType == "2") {
      if (
        document.getElementById("next_image") &&
        document.getElementById("previous_image")
      ) {
        document
          .getElementById("next_image")
          .addEventListener("raycaster-intersected", intersected, false);
        document
          .getElementById("next_image")
          .addEventListener(
            "raycaster-intersected-cleared",
            intersectedCleared,
            false
          );
        document
          .getElementById("previous_image")
          .addEventListener("raycaster-intersected", intersected, false);
        document
          .getElementById("previous_image")
          .addEventListener(
            "raycaster-intersected-cleared",
            intersectedCleared,
            false
          );
      }
    }
    chooseControls();
    passControls();
  };

  useEffect(() => {
    if (!!document.querySelector(".ui-chat"))
      document.querySelector(".ui-chat").scrollTop =
        document.querySelector(".ui-chat").scrollHeight;
  }, [msgs]);

  useEffect(() => {
    const loadInterval = setInterval(() => {
      if (loadingFlag) {
        var entity = document.querySelector("#rig");
        if (!!entity && roomIndex != -1) {
          (window as any).NAF.schemas.add({
            template: "#avatar-template",
            components: [
              "position",
              "rotation",
              {
                selector: ".nametag",
                component: "text",
                property: "value",
              },
              {
                selector: ".model",
                component: "src",
              },
            ],
          });
          localStorage.setItem("modelLoaded", "false");
          (window as any).isReady1 = true;
          start_scene();
          setIntervalId(setInterval(updateVolume, 300));
          clearInterval(loadInterval);
        }
      }
    }, 300);
    setTimeout(() => {
      clearInterval(loadInterval);
    }, 10000);
  }, [loadingFlag]);

  const updateVolume = () => {
    var positions = {};
    for (var playerName in (window as any).positions) {
      var player = (window as any).positions[playerName];
      if (!!player.components) {
        positions[playerName] = player.components[0];
      }
      if (!!player.d) {
        positions[playerName] = player.d[0].components[0];
      }
    }
    var myPosition = {};
    if (!!(window as any).myPosition) {
      if (!!(window as any).myPosition.components) {
        myPosition = (window as any).myPosition.components[0];
      }
      if (!!(window as any).myPosition.d) {
        myPosition = (window as any).myPosition.d[0].components[0];
      }
    }
    var audios = (window as any).audios;
    console.log(audios, myPosition, positions);
    for (var audio in audios) {
      if (audio != userName) {
        if (!!positions[audio] && !!myPosition) {
          var a = (myPosition as any).x - positions[audio].x;
          var b = (myPosition as any).z - positions[audio].z;
          var distance = a * a + b * b;
          if (distance < 4 || !distance) distance = 4;
          console.log(audio, distance, (window as any).volumes, audios[audio])
          if (
            !!(window as any).volumes &&
            !!(window as any).volumes[audio] &&
            !!audios &&
            !!audios[audio]
          ) {
            audios[audio].volume = 0;
          } else {
            if (!!audios && !!audios[audio])
              audios[audio].volume = 1 / distance;
          }
        }
      }
    }
  };

  const handleMuteBtnClick = () => {
    setMute((prev) => !prev);
  };

  const toggleVolume = (speaker) => {
    var temp = Object.assign({}, volumes);
    temp[speaker] = volumes[speaker] != undefined ? !volumes[speaker] : true;
    (window as any).volumes = temp;
    setVolumes(temp);
  };

  const entireToggleVolume = (volume) => {
    if (rooms.length == 0 || !rooms[roomIndex]) {
      return;
    }
    const speakers = rooms[roomIndex].speakers;
    if (speakers) {
      var temp = Object.assign({}, volumes);
      speakers.forEach((speaker, index) => {
        temp[speaker] = !volume;
      });
      (window as any).volumes = temp;
      setVolumes(temp);
    }
  }

  const leaveRoom = () => {
    clearInterval(intervalId);
    var objectsToDelete = [];
    var items = document.querySelectorAll(".model");
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

    (window as any).isReady1 = false;
    (window as any).positions = {};
    (window as any).myPosition = {};
    (window as any).socket.emit(ACTIONS.LEAVE, {
      roomId: rid,
      user: { name: userName },
    });
    dispatch(setMsg([]));
    dispatch(setPeers([]));
    router.push("/experience");
  }

  useEffect(() => {
    handleMute(!isMute, userName);
  }, [isMute]);

  return (
    <div
      className={` ${loadingFlag ? "flex" : "hidden"
        } h-full w-full `}
    >
      {parseInt(roomType ? roomType.toString() : "-1") > 2 ? (
        <ChatPrivateModel
          modelNo={no}
          roomInfo={roomInfo}
          modelURL={models[modelIndex].modelUrl}
          name={userName}
        />
      ) : (
        <ChatPublicModel
          roomType={roomType}
          modelURL={models[modelIndex].modelUrl}
          name={userName}
          creator={
            !rooms || roomIndex == -1 ? "nick" : rooms[roomIndex].name
          }
          slideUrls={
            !rooms || roomIndex == -1 ? [] : rooms[roomIndex].slideUrls
          }
        />
      )}
      {/* <Image
        src={`/images/experience/room_images/room_${parseInt(rid.toString()) + 1
          }.jpg`}
        layout="fill"
      /> */}
      <BackButton onClick={leaveRoom} />
      <TopRightMenu
        isMute={isMute}
        leaveRoom={leaveRoom}
        entireToggleVolume={entireToggleVolume}
        handleMuteBtnClick={handleMuteBtnClick}
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        usersBoxActive={usersBoxActive}
        setUsersBoxActive={setUsersBoxActive}
        isMobile={isMobile}
      />
      <ChattingBox
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
      />
      <UsersBox
        rooms={rooms}
        roomIndex={roomIndex}
        volumes={volumes}
        clients={clients}
        toggleVolume={toggleVolume}
        provideRef={provideRef}
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        usersBoxActive={usersBoxActive}
        setUsersBoxActive={setUsersBoxActive}
        isMobile={isMobile}
      />
      <SettingBox
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        kind="setting"
      />
    </div>
  );
};

export default MainScr;
