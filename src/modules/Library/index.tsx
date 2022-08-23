import React from "react";
import { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "components/icons";
import { GameLibraryData, LiveEventsData, LibraryMenu, EventsMenu } from "data/GameLibrary";
import GamePanel from "components/Common/Panels/GamePanel";
import LiveEventPanel from "components/Common/Panels/LiveEventPanel";
import EventMorePanel from "components/Common/Panels/EventMorePanel";
import { useDispatch } from "react-redux";
import { changeInfo } from "redux/slices/eventSlice";
import { apiCaller } from "utils/fetcher";

const Library = (props) => {
  const { setPage, selectGame, createEventToggle, setCreateEventToggle } = props;
  const dispatch = useDispatch()
  const rightScroll = () => {
    document.querySelector(".library-tab").scrollLeft += 80;
  };

  const leftScroll = () => {
    document.querySelector(".library-tab").scrollLeft -= 80;
  };

  const [eventTabIndex, setEventTabIndex] = useState(0);
  const [gameTabIndex, setGameTabIndex] = useState(0);
  const [activeLibraryMenu, setActiveLibraryMenu] = useState("Up and Coming");
  const [activeEventsMenu, setActiveEventsMenu] = useState("Your DAOs");
  const [eventsList, setEventsList] = useState([])

  useEffect(() =>  {
    if (!createEventToggle) {
      apiCaller.get("/events?isPrivate=false")
      .then(response => {
        console.log(response.data.data)
        let events = response.data.data
        setEventsList(events)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [createEventToggle])

  useEffect(() => {
    const payload = {
      value: activeEventsMenu,
      type: "type"
    }
    dispatch(changeInfo({ payload: payload }))
  }, [activeEventsMenu])

  const onClickGameItem = (data) => {
    setPage(1);
    selectGame(data);
  };

  const onClickEventMenu = (index, item) => {
    setActiveEventsMenu(item);
    setEventTabIndex(index);
  }

  return (
    <div className="flex flex-col w-full px-[30px]">
      <div className="my-[10px] text-[#F3F3F3] font-500 md:text-[24px] xs:text-[18px]">
        Live Now
      </div>
      <div className={`relative w-fit`}>
        <div className="library-tab flex flex-row h-full lg:justify-between md:justify-around sm:justify-between xs:justify-between">
          {EventsMenu.map((item, index) => (
            <div
              className={`flex flex-col 
                        custom-2xl:mr-10 mr-[20px] xl:mr-[28px] font-500 text-[16px] px-[18px] py-[6px] justify-center items-center ${
                          activeEventsMenu == item ? "text-[#29B080]" : "text-[#929298]"
                        } h-full cursor-pointer hover:text-[#29B080] select-none ${
                index === 0 ? "pl-0" : ""
              }`}
              onClick={() => onClickEventMenu(index, item)}
              key={index}
            >
              <nobr>{item}</nobr>
            </div>
          ))}
        </div>
      </div>
      <div className="gap-[32px] grid custom-2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center my-[16px]">
        {eventTabIndex === 0 && eventsList ? eventsList.filter((event, index) => event.type === activeEventsMenu ).map((item, index) => (
          <LiveEventPanel data={item} key={index} onClick={() => onClickGameItem(item)} />
        )) : null}
        {eventTabIndex === 1 && eventsList ? eventsList.filter((event, index) => event.type === activeEventsMenu ).map((item, index) => (
          <LiveEventPanel data={item} key={index} onClick={() => onClickGameItem(item)} />
        )) : null}
        {eventTabIndex === 2 && eventsList ? eventsList.filter((event, index) => event.type === activeEventsMenu ).map((item, index) => (
          <LiveEventPanel data={item} key={index} onClick={() => onClickGameItem(item)} />
        )) : null}
        {eventTabIndex === 3 && eventsList ? eventsList.filter((event, index) => event.type === activeEventsMenu ).map((item, index) => (
          <LiveEventPanel data={item} key={index} onClick={() => onClickGameItem(item)} />
        )) : null}
        <EventMorePanel setCreateEventToggle={setCreateEventToggle} />
      </div>
      
      <div className="my-[10px] text-[#F3F3F3] font-500 md:text-[24px] xs:text-[18px]">
        Explore Library
      </div>
      <div className={`relative w-fit`}>
        <div className="library-tab flex flex-row h-full lg:justify-between md:justify-around sm:justify-between xs:justify-between">
          {LibraryMenu.map((item, index) => (
            <div
              className={`flex flex-col 
                        custom-2xl:mr-10 mr-[20px] xl:mr-[28px] font-500 text-[16px] px-[18px] py-[6px] justify-center items-center ${
                          activeLibraryMenu == item ? "text-[#29B080]" : "text-[#929298]"
                        } h-full cursor-pointer hover:text-[#29B080] select-none ${
                index === 0 ? "pl-0" : ""
              }`}
              onClick={() => setActiveLibraryMenu(item)}
              key={index}
            >
              <nobr>{item}</nobr>
            </div>
          ))}
        </div>

        <div className="absolute right-[-3px] text-white top-[0px] sm:hidden xs:block">
          <button
            onClick={rightScroll}
            className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[35px] h-[48px]"
          >
            <RightArrow />
          </button>
        </div>

        <div className="absolute left-[-3px] text-white top-[0px] sm:hidden xs:block">
          <button
            onClick={leftScroll}
            className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[35px] h-[48px]"
          >
            <LeftArrow />
          </button>
        </div>
      </div>
      <div className="gap-[32px] grid custom-2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center my-[16px]">
        {GameLibraryData.map((item, index) => (
          <GamePanel
            key={index}
            image={item.image}
            title={item.title}
            likes={item.likes}
            members={item.members}
            onClick={() => onClickGameItem(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
