import { WalletButton } from "components/Common/Buttons"
import { YourDomainInput } from "components/Common/Forms"
const socialIcons = ["/images/social/twitter.png", "/images/social/discord.png", "/images/social/github.png"].map((i,j) => {
    return <WalletButton connected={j === 1 ? true : false} caption="Connect" icon={i} onClick={() => alert("connect function")} height={52} styles="pt-[12px] pb-[16px]" iSize={20}/>
})

const TabGeneralContent = () => {
    return (
        <div className="profile-settings-content h-[496px] min-w-[330px] flex flex-col items-between gap-[32px] mt-8 pt-[2px] pb-[2px] mb-[25px]  overflow-x-visible items-center">
            <div className="flex w-full mt-[10px]">
                <YourDomainInput />
            </div>
            <div className=" flex flex-col gap-[16px]">
                {socialIcons}
            </div>
            <div className="wallet flex flex-col gap-[16px] pb-[60px]">
                <WalletButton caption="Connect ETH wallet" icon="/images/wallets/ethereum.png" onClick={() => alert("connect function")} height={52} styles="pt-[12px] pb-[16px]" iSize={20}/>
                <WalletButton connected={true} caption="Connected AK...VQT9" icon="/images/wallets/polygon.png" onClick={() => alert("connect function")} height={52} styles="pt-[12px] pb-[16px]" iSize={20}/>
            </div>
        </div>
    )
}

export default TabGeneralContent