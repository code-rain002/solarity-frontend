import { WalletButton } from "components/Common/Buttons"
import { DiscordImg } from "components/Common/Images"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, RootStateOrAny, useDispatch, useSelector } from "react-redux";

const discordLinkGenerator = (currentUrl: string) => {
    const baseUrl = "https://discord.com/api/oauth2/authorize";
    const params = {
        client_id: "963209278146117632",
        redirect_uri: currentUrl,
        response_type: "code",
        scope: "identify connections",
    };

    const urlParams = new URLSearchParams(params);
    return baseUrl + "?" + urlParams.toString();
};

export const DiscordLink = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { profileData } = useSelector(
        (state: RootStateOrAny) => ({
            profileData: state.profile.data
        })
    );
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        setIsConnected(profileData.discordConnected)
    })
    const linkDiscord = () => {
        const appUrl = (() => {
            let url = new URL(window.location.origin + router.asPath);
            let params = new URLSearchParams(url.search);
            params.set("link", "discord");
            return url.origin + url.pathname + "?" + params.toString();
        })();
        const discordConnectionLink = discordLinkGenerator(appUrl);
        router.push(discordConnectionLink);
    }
    return (
        <WalletButton caption={isConnected ? "Connected" : "Connect"} icon={DiscordImg} onClick={linkDiscord} styles="!w-[100%] xl:!w-[95%]" connected={isConnected} />
    )
}