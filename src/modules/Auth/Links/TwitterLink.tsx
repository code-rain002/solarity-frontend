import { WalletButton } from "components/Common/Buttons";
import { TwitterImg } from "components/Common/Images";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Provider,
  RootStateOrAny,
  useDispatch,
  useSelector,
} from "react-redux";
import Image from "next/image";
import { linkAccounts, unlinkAccounts } from "redux/slices/authSlice";

const twitterLinkGenerator = (currentUrl: string) => {
  const baseUrl = "https://twitter.com/i/oauth2/authorize";
  const params = {
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID,
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
  const dispatch = useDispatch();
  const { userInfo, isMobile } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    isMobile: state.common.isMobile
  }));
  const {
    query: { link, code },
    asPath,
  } = router;
  const [appUrl, setAppUrl] = useState("");

  useEffect(() => {
    let url = new URL(window.location.origin + asPath);
    let params = new URLSearchParams(url.search);
    params.delete("state");
    params.delete("code");
    params.delete("domain");
    params.delete("title");
    params.set("link", "twitter");
    if (userInfo.domain && userInfo.title) {
      params.set("domain", userInfo.domain);
      params.set("title", userInfo.title);
    }
    let appUrl = url.origin + url.pathname + "?" + params.toString();
    setAppUrl(appUrl);
  }, []);

  useEffect(() => {
    if (link === "twitter") {
      dispatch(
        linkAccounts({
          data: {
            link: "twitter",
            code,
            url: appUrl,
          },
          finalFunction: () => { },
        })
      );
    }
  }, [code, link]);

  return (
    <>
      {userInfo.links.twitter.connected ? (
        <button
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] ${isMobile ? 'justify-center h-[48px]' : 'justify-between h-[56px]'} !w-[100%] outline-1 bg-focusbackground !text-white`}
          onClick={() => {
            dispatch(
              unlinkAccounts({
                data: {
                  link: "twitter",
                  code,
                },
                finalFunction: () => { },
              })
            );
          }}
        >
          {!isMobile ? (
            <>
              <span className="text-[14px] sm:text-[16px] text-left">{"Disconnect"}</span>
              <div className="text-center pt-2">
                <Image src={TwitterImg} width={28} height={28} />
              </div>
            </>
          ) : (
            <div className="text-center pt-2">
              <Image src={TwitterImg} width={24} height={24} />
            </div>
          )}
        </button>
      ) : (
        <a
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary items-center bg-[#1d1e20] ${isMobile ? 'justify-center h-[48px]' : 'justify-between h-[56px]'} !w-[100%] flex`}
          href={twitterLinkGenerator(appUrl)}
          target="_blank"
        >
          {!isMobile ? (
            <>
              <span className="text-[14px] sm:text-[16px] text-left">{"Connect"}</span>
              <div className="text-center pt-2">
                <Image src={TwitterImg} width={28} height={28} />
              </div>
            </>
          ) : (
            <div className="text-center pt-2">
              <Image src={TwitterImg} width={24} height={24} />
            </div>
          )}
        </a>
      )}
    </>
  );
};
