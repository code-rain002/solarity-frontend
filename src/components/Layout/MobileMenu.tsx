import { useEffect, useState } from "react"
import MobileUserInfoMenu from "components/Common/Forms/MobileUserInfoMenu"
import SearchBox from "components/Common/Forms/SearchBox"
import MobileHeaderMenuItem from "components/Common/Layout/MobileHeaderMenuItem"
import MobileHeaderWallet from "components/Profile/MobileHeaderWallet"
import MobileSidebar from "./MobileSidebar"
import { HeaderMenuTitles } from "data/HeaderMenu"
import { checkBrowser } from "utils"

type MobileMenuProps = {
    mobileMenuToggler: boolean,
    onClick: any,
    searchString: string;
    setSearchString: Function;
}

const MobileMenu = (props: MobileMenuProps) => {

    const [active, setActive] = useState('Explore');

    const item_arr = HeaderMenuTitles.map(function (i) {
        return <MobileHeaderMenuItem key={i} title={i} active={active === i} onClick={() => setActive(i)} />
    })

    return (
        <div className={`absolute transition ease-in-out sm:hidden xs:flex-col w-full h-[0px]
                        bg-globalBgColor z-[1000] pt-[80px] text-white
                        ${props.mobileMenuToggler ? "h-[100vh] xs:flex" : "h-[0px] xs:hidden"} justify-end`}>
            <div className="mobile-header-menu flex h-full items-start pt-[170px]">
                <div className="mobile-searchbar-menu flex-col w-full justify-start">
                    <div className="w-full p-[24px] border-b-[1px] border-[#272829]">
                        <SearchBox searchString={props.searchString} setSearchString={props.setSearchString} />
                    </div>
                    <div className="flex-col w-full h-full pt-[24px]">
                        {item_arr}
                    </div>
                </div>
                <div className="overflow-y-scroll h-full ">
                    <MobileSidebar />
                </div>
            </div>

            <div className="wallet_bar self-center">
                <MobileHeaderWallet />
            </div>

            <div className="user_info self-center w-full">
                <MobileUserInfoMenu />
            </div>
        </div>
    )
}

export default MobileMenu