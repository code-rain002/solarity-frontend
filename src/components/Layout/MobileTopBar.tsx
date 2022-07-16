import { LogoSVGImg } from "components/Common/Images"
import { MenuIcon, MobileMenuCloseIcon, NotificationIcon } from "components/icons"
import Image from "next/image"

type MobileTopBarProps = {
    mmt : boolean,
    onClick : any
}

const MobileTopBar = (props : MobileTopBarProps) => {
    return (
        <div className="sm:hidden xs:flex h-[80px] w-full py-[19px] px-[24px] justify-between border-[1px] border-[#1d1f1f]
                        items-center z-[1001]">
            <div className="" onClick={props.onClick}>
                { props.mmt ? <MobileMenuCloseIcon /> : <MenuIcon /> }
                
            </div>
            <div className="border-[1px] border-[#f3f3f3] rounded-[20px] w-10 h-10 cursor-pointer">
                <Image src={LogoSVGImg} width={40} height={40}></Image>
            </div>
            <div>
                <NotificationIcon />
            </div>
        </div>
    )
}

export default MobileTopBar