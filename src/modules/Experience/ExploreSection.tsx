import ExploreRoomItem from "components/Experience/ExploreRoom/ExploreRoomItem";
import ExploreRoomTitle from "components/Experience/ExploreRoom/ExploreRoomTitle";
import { SolanaIcon } from "components/icons";
import { ExploreRoomData } from "data/Experience";
import { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";

const ExploreSection = () => {

  var { rooms } = useAppSelector(state => state.profile.data);
  var [sortedRooms, setSortedRooms] = useState<any[]>([])

  useEffect(() => {
    if (!!rooms && rooms.length != 0) {
      // To sort rooms
      var tmpRooms = [...rooms];
      tmpRooms.sort((a: any, b: any) => {
        return a.roomNo - b.roomNo;
      }); console.log(rooms);
      setSortedRooms(tmpRooms);
    }
  }, [rooms])

  return (
    <div className=" md:mt-[35px] xs:mt-[32px] w-full">
      <ExploreRoomTitle number={(rooms ? rooms.length : 0)} />
      <div className=" grid grid-cols-12 lg:gap-[32px] xs:gap-[16px] w-full ">
        <ExploreRoomItem
          key={2}
          type={false}
          roomNo={2}
          walletIcon={<SolanaIcon />}
          roomName={"Plaza Room"}
          imgUrl={"/images/rooms/plaza.jpg"}
        />
        <ExploreRoomItem
          key={0}
          type={false}
          roomNo={0}
          walletIcon={<SolanaIcon />}
          roomName={"Hub Room"}
          imgUrl={"/images/rooms/hub.jpg"}
        />
        <ExploreRoomItem
          key={1}
          type={false}
          roomNo={1}
          walletIcon={<SolanaIcon />}
          roomName={"Gallery Room"}
          imgUrl={"/images/rooms/gallery.png"}
        />
        {sortedRooms.map((room, index) => {
          return (
            <ExploreRoomItem
              key={index + 3}
              type={true}
              roomNo={room.roomNo}
              walletIcon={<SolanaIcon />}
              imgUrl={room.imageUrl}
              roomName={room.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
