import { DownArrow, UpArrow } from "components/icons";
import { UsersBoxData } from "data/Experience";
import CopyInviteLinkBtn from "./CopyInviteLinkBtn";
import UsersBoxItem from "./UsersBoxItem";

type UsersBoxType = {
  setLeftSideActive: any;
  leftSideActive: string;
  usersBoxActive: boolean;
  setUsersBoxActive: any;
  isAndroid: boolean;
};

const UsersBox = (props: UsersBoxType) => {
  return (
    <div
      className={` absolute
                        md:bottom-[32px] md:left-[32px] md:w-[426px] md:top-[108px] md:rounded-[24px]
                        xs:bottom-[78px] xs:left-[0px] xs:w-full xs:top-[0px] xs:rounded-[0px]
                        border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${
                          props.isAndroid
                            ? props.leftSideActive === "users"
                              ? "flex flex-col"
                              : "hidden"
                            : props.usersBoxActive
                            ? "flex flex-col"
                            : "hidden"
                        } pt-[6px] pb-[0px] px-[6px] overflow-hidden 
                        cursor-default `}
    >
      <div className=" flex flex-row items-center justify-between w-full h-[30px] pt-[32px] px-[32px] pb-[32px] ">
        <div className="flex flex-row gap-[12px]">
          <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
            Users
          </div>
          <div className="font-['Outfit'] font-[500] text-[24px] text-[#474749] select-none ">
            55
          </div>
        </div>

        <div className=" flex flex-row items-center  gap-[24px] cursor-pointer ">
          <div className="md:block xs:hidden">
            <CopyInviteLinkBtn onClick={() => console.debug("okay")} />
          </div>
          <div
            className=" md:flex xs:hidden cursor-pointer "
            onClick={() =>
              props.isAndroid
                ? props.leftSideActive === "users"
                  ? props.setLeftSideActive("")
                  : ""
                : props.setUsersBoxActive(false)
            }
          >
            <UpArrow />
          </div>
          <div
            className=" md:hidden xs:flex cursor-pointer "
            onClick={() =>
              props.isAndroid
                ? props.leftSideActive === "users"
                  ? props.setLeftSideActive("")
                  : ""
                : props.setUsersBoxActive(false)
            }
          >
            <DownArrow />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] px-[26px] pt-[12px] overflow-y-scroll overflow-x-visible md:mb-[0px] xs:mb-[80px] ">
        {UsersBoxData.map((i, j) => (
          <UsersBoxItem
            imgUrl={i.imgUrl}
            uName={i.uName}
            uState={i.uState}
            mute={i.mute}
            key={j}
          />
        ))}
      </div>
      <div className="absolute md:bottom-[0px] xs:bottom-[77px] right-[0px] h-[30px] w-full bg-gradient-to-t from-[#131314] to-[rgba(19, 19, 20, 0)] "></div>

      <div className="md:hidden xs:absolute bottom-[20px] w-full px-[32px] ml-[-8px]">
        <CopyInviteLinkBtn onClick={() => console.log("invitation link")} />
      </div>
    </div>
  );
};

export default UsersBox;
