import { WalletButton } from "components/Common/Buttons"
import { DiscordImg } from "components/Common/Images"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { Provider, RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { linkAccounts, unlinkAccounts } from "redux/slices/authSlice";

const discordLinkGenerator = (currentUrl: string) => {
	const baseUrl = "https://discord.com/api/oauth2/authorize";
	const params = {
		client_id: "963209278146117632",
		redirect_uri: currentUrl,
		response_type: "code",
		scope: "identify connections",
	};
	// https://discord.com/api/oauth2/authorize?client_id=1021619610652520471&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fregister%3Flink%3Ddiscord&response_type=code&scope=identify%20connections%20guilds%20guilds.members.read%20dm_channels.read
	const urlParams = new URLSearchParams(params);
	return baseUrl + "?" + urlParams.toString();
};

export const DiscordLink = () => {
	const router = useRouter();
	const {
		query: { link, code },
		asPath,
	} = router;
	const dispatch = useDispatch();
	const { discordConnected, discordUsername } = useSelector(
		(state: RootStateOrAny) => state.profile.data
	);

	const appUrl = (() => {
		let url = new URL(window.location.origin + asPath);
		let params = new URLSearchParams(url.search);
		params.delete("state");
		params.delete("code");
		params.set("link", "discord");
		// console.log(url.origin + url.pathname + "?" + params.toString())
		return url.origin + url.pathname + "?" + params.toString();
	})();

	const discordConnectionLink = discordLinkGenerator(appUrl);

	useEffect(() => {
		console.log(appUrl)
		if (link === "discord") {
			dispatch(
				linkAccounts({
					data: {
						link: "discord",
						code,
						url: appUrl,
					},
					finalFunction: () => {

					},
				})
			);
		}
	}, [code, link]);

	const linkDiscord = () => {
		const appUrl = (() => {
			let url = new URL(window.location.origin + router.asPath);
			let params = new URLSearchParams(url.search);
			params.delete("state");
			params.delete("code");
			params.set("link", "discord");
			return url.origin + url.pathname + "?" + params.toString();
		})();
		const discordConnectionLink = discordLinkGenerator(appUrl);
		console.log(discordConnectionLink)
		router.push(discordConnectionLink);
	}

	return (
		<>
			{
				discordConnected ?
					<button
						className={`font-medium py-[22px] px-[22px] rounded-[14px] text-white/70 h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between !w-[100%] outline-1 bg-focusbackground !text-white`}
						onClick={() => {
							dispatch(
								unlinkAccounts({
									data: {
										link: "discord",
										code,
									},
									finalFunction: () => {

									},
								})
							);
						}}
					>
						<span className="text-[16px] w-[90%] text-left">{"Disconnect"}</span>
						<div className="pt-2 text-right"><Image src={DiscordImg} width={28} height={28} /></div>
					</button>
					:
					<a className={`font-medium py-[22px] px-[22px] rounded-[14px] text-white/70 h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between !w-[100%]`} href={discordConnectionLink} target="_blank">
						<span className="text-[16px] w-[90%] text-left">{"Connect"}</span>
						<div className="pt-2 text-right"><Image src={DiscordImg} width={28} height={28} /></div>
					</a>
			}
		</>
	)
}