import React from "react";
import ItemTemplate from "../ItemTemplate";

const UsersSidebar = () => {
  return (
    <div>
      <div className="flex gap-4 pb-4">
        {['Messages', 'Requests'].map((menuItem, index) => (
          <div className={(menuItem == 'Messages' ? `text-primary` : 'text-[#929298]') + ` text-base cursor-pointer hover:text-primary`} key={index}>
            {menuItem}
          </div>
        ))}
      </div>
      {/* Menu Content */}
      <div className="menuContent grid gap-y-2">
        {[].map((chat: any, index) => (
          <div className="cursor-pointer" onClick={() => { }} key={index}>
            <ItemTemplate {...chat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersSidebar;