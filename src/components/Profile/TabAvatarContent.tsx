import { WalletButton } from "components/Common/Buttons"
import Image from "next/image"
import { AvatarPanel } from "components/Common/Panels"
import SettingsFileUpload from "./SettingsFileUpload"

const socialIcons = ["/images/social/twitter.png", "/images/social/discord.png", "/images/social/github.png"].map((i,j) => {
    return <WalletButton connected={j === 1 ? true : false} caption="Connect" icon={i} onClick={() => alert("connect function")} height={52} styles="pt-[12px] pb-[16px]" iSize={20}/>
})

const TabAvatarContent = () => {
    return (
        <div className="profile-settings-content tab-avatar-content relative h-full min-w-[330px] flex flex-col gap-[32px] mt-8 pt-[5px]  pb-[2px] mb-[40px] overflow-y-auto overflow-x-visible items-center">
            <div className="flex justify-center rounded-[45px] min-h-[130px] min-w-[130px]">
                <Image src="/images/profile/temp/Avatar.png" layout="fixed" width={130} height={130} alt="avatar" />
            </div>
            <div className="social flex flex-col w-full">
                <SettingsFileUpload />
            </div>
            <div className="flex gap-[24px] justify-between w-full pb-[60px] overflow-y-auto">
                <AvatarPanel imageUrl="/images/profile/profile.png" title="what is this" onClick={() => alert("asdf")}  />
                <AvatarPanel imageUrl="/images/profile/profile.png" title="what is this" onClick={() => alert("asdf")}  />
            </div>
        </div>
    )
}

export default TabAvatarContent