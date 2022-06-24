import { WalletButton } from "components/Common/Buttons";
import { TwitterImg } from "components/Common/Images";
import { useRouter } from "next/router";

const twitterLinkGenerator = (currentUrl: string) => {
    const baseUrl = "https://twitter.com/i/oauth2/authorize";
    const params = {
      response_type: "code",
      client_id: "MENrR095Mkl6WFdKWGZEV0VLTkg6MTpjaQ",
      redirect_uri: currentUrl,
      scope: "tweet.read users.read offline.access",
      state: "state",
      code_challenge: "challenge",
      code_challenge_method: "plain",
    };
    const urlParams = new URLSearchParams(params);
    return baseUrl + "?" + urlParams.toString();
};

export const TwitterLink = () => {
    const router = useRouter();
    const linkTwitter = () => {
        const appUrl = (() => {
            let url = new URL(window.location.origin + router.asPath);
            let params = new URLSearchParams(url.search);
            params.set("link", "twitter");
            return url.origin + url.pathname + "?" + params.toString();
        })();
        const twitterConnectionLink = twitterLinkGenerator(appUrl);
        router.push(twitterConnectionLink);
    }
    return (
        <WalletButton caption="Connected" icon={TwitterImg} onClick={linkTwitter} styles="!w-[100%] xl:!w-[95%]" connected={false} />
    )
}