import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { LeftArrow, RightArrow } from "components/icons";
import { LibraryMenu } from "data/LibraryMenu";
import GameDetailPanel from "components/Common/Panels/GameDetailPanel";
import { ArrowLeftIcon } from "assets/svgs";


const GameDetail = (props) => {
    const { setPage, setIframe, selectedGame } = props
	const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="my-[10px] text-[#F3F3F3] font-500 md:text-[24px] xs:text-[18px] cursor-pointer flex items-center w-fit" onClick={() => setPage(0)}>
        <ArrowLeftIcon />
        <span className="ml-[10px]">Tired Turtles</span>
      </div>
      
      <div className={`relative mt-[15px]`}>
        <div className="flex flex-col sm:flex-row">
            <div className="w-full mx-auto xs:w-[75%] xl:w-[25%] lg:w-[30%] md:w-[35%] sm:w-[45%]">
                <GameDetailPanel
                    data={selectedGame}
                    onPlay={setIframe}
                />
            </div>
            <div className="w-full xl:w-[75%] lg:w-[70%] md:w-[65%] sm:w-[55%]">
                <div className="border-y-[1px] border-[#1D1F1F] pl-[50px] mt-[25px] sm:mt-0">
                    <ul className="flex flex-row text-[14px] py-[17.5px]">
                        <li className={`${tabIndex === 0 ? 'text-[#29B080]' : "text-[#929298]"} w-[100px]`}><span className="cursor-pointer" onClick={() => setTabIndex(0)}>About</span></li>
                        <li className={`${tabIndex === 1 ? 'text-[#29B080]' : "text-[#929298]"} w-[100px]`}><span className="cursor-pointer" onClick={() => setTabIndex(1)}>Store</span></li>
                        <li className={`${tabIndex === 2 ? 'text-[#29B080]' : "text-[#929298]"} w-[100px]`}><span className="cursor-pointer" onClick={() => setTabIndex(2)}>Server</span></li>
                    </ul>
                </div>
                {
                    tabIndex === 0 ?
                    <>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-[65%] pl-[20px] lg:pl-[50px]">
                                <div className="text-white font-bold py-[20px] text-[21px]">Description</div>
                                <div className="text-[16px] text-[#B3B3B7] lg:h-[400px] overflow-scroll pr-[10px]">
                                    New awakening, new island, new boss raid, new weapon, and LOTS MORE! 
                                    <br />
                                    Welcome to Blox Fruits! Become a master swordsman or a powerful blox fruit user as you train to become the strongest player to ever live. You can choose to fight against tough enemies or have powerful boss battles while sailing across the ocean to find hidden secrets. 
                                    <br />
                                    Current level cap: 2300
                                    Current fruits in the game:
                                    Bomb, Spike, Chop, Spring, Kilo, Smoke, Spin, Flame, Falcon, Ice, Sand, Dark, Revive, Diamond, Light, Love, Magma, Door, Rubber, Quake, Human Buddha, Barrier, String, Bird Phoenix, Rumble, Paw, Gravity, Dough, Shadow, Venom, Control, Soul, and Dragon.
                                    <br />
                                    FAQ:
                                    - Fruits spawn in the map every hour / despawn after 20. 
                                    - You can buy fruits from the Blox Fruits Dealer. He restocks random fruits every 4 hours 
                                    - More info in the group description
                                    New awakening, new island, new boss raid, new weapon, and LOTS MORE! 
                                    <br />
                                    Welcome to Blox Fruits! Become a master swordsman or a powerful blox fruit user as you train to become the strongest player to ever live. You can choose to fight against tough enemies or have powerful boss battles while sailing across the ocean to find hidden secrets. 
                                </div>
                            </div>
                            <div className="w-full lg:w-[35%] pl-[20px] lg:pl-[35px]">
                                <div className="text-white font-bold py-[20px] text-[21px]">Quests</div>
                                {
                                    [0, 1, 2, 3].map(index => (
                                        <div className="flex flex-row">
                                            <div className=""><Image src="/images/library/temp/badges.png" width={70} height={70} /></div>
                                            <div className="ml-[15px]">
                                                <div className="text-[16px] text-white font-medium">Second Sea</div>
                                                <div className="text-[12px] text-white font-normal">You&apos;ve unlocked the Second Sea!</div>
                                                <div className="text-[12px] text-[#29B080] font-normal mt-[5px]">Rarity: 0.6%</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    : tabIndex === 1 ?
                    <>
                        <div className="sm:pl-[20px] lg:pl-[50px]">
                            <div className="text-white font-bold py-[20px] text-[21px]">Passes</div>
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[32px] justify-items-center lg:max-h-[400px] overflow-auto sm:pr-[10px]">
                                {
                                    [0,1,2,3,4,5,6,7,8,9].map(index => (
                                        <div className="bg-[#181818] px-[15px] py-[20px] rounded-[20px] w-[70%] sm:w-full">
                                            <div className="text-center mb-[15px]">
                                                <Image src="/images/library/temp/stores.png" height={80} width={80} />
                                            </div>
                                            <div className="text-white font-semibold text-[18px]">2x Money</div>
                                            <div className="flex items-center text-white font-medium text-[18px] mt-[10px]">
                                                <Image src="/images/library/temp/logo.png" height={18} width={18} />&nbsp;<span>450</span>
                                            </div>
                                            <button className={`font-medium py-[8.5px] rounded-[12px] text-white w-[100%] text-[14px] sm:text-[14px] text-center tracking-wider  inline-flex items-center justify-center bg-primary hover:bg-lightprimary mt-[20px]`}>
                                                <span>Buy</span>
                                            </button>
                                        </div>        
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    : tabIndex === 2 ?
                    <div className="pl-[50px]">
                        <div className="text-white font-medium py-[20px]">There are currently no running experiences.</div>
                    </div>
                    : null
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
