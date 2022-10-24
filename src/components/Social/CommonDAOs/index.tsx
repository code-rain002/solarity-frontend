import React from "react";
import { Top_Daos, Your_Daos } from "data/Sidebar"
import CommonDAOavatar from "../../Profile/CommonDAOavatar";
import DAORoleButton from "components/Common/Buttons/DAORoleButton"

const CommonDAOs = () => {
  return (
    <div className="flex flex-col  mb-[30px]
      custom-2xl:mt-[55px] xl:mt-[104px] sm:mt-[20px] w-[100%]
      pt-[24px] pb-[32px] px-[32px] rounded-[20px] bg-[#19191a] h-fit"
    >
      <div className="flex justify-left font-500 text-[#f3f3f3] text-[20px]">
        Common DAO
      </div>

      <div className="flex flex-row justify-between mt-[24px] pb-[16px] border-b-[1px] border-b-[#272829]">
        {Your_Daos.avatars.map((avatar, index) => (
          <CommonDAOavatar img_url={avatar.url} key={index} />
        ))}
      </div>

      <div className="flex justify-start items-center py-[24px] font-500 text[20px] text-[#f3f3f3]">
        Roles
      </div>
      {
        [1, 2].map((i, index) => {
          return (
            <DAORoleButton description="Developer" key={index} caption="Big Star" onClick={() => (alert("THE ROLE OF THIS DAO."))} icon={`/images/DAO_avatars/top_daos/top_daos(${i}).png`} />
          )
        })
      }
    </div>
  );
}

export default CommonDAOs;