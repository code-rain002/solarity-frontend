import ExploreRoomItem from "components/Experience/ExploreRoom/ExploreRoomItem";
import ExploreRoomTitle from "components/Experience/ExploreRoom/ExploreRoomTitle";
import { ExploreRoomData } from "data/Experience";

const ExploreSection = () => {
  return (
    <div className=" md:mt-[35px] xs:mt-[32px] w-full">
      <ExploreRoomTitle number="19" />
      <div className=" grid grid-cols-12 lg:gap-[32px] xs:gap-[16px] w-full ">
        {ExploreRoomData.map((i) => {
          return (
            <ExploreRoomItem
              walletIcon={i.walletIcon}
              collectionName={i.collectionName}
              imgUrl={i.imgUrl}
              roomName={i.roomName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
