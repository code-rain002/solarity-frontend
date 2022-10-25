import { WalletButton } from "components/Common/Buttons";
import { DiscordImg, GithubImg } from "components/Common/Images";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Provider,
  RootStateOrAny,
  useDispatch,
  useSelector,
} from "react-redux";
import { linkAccounts, unlinkAccounts } from "redux/slices/authSlice";

const githubLinkGenerator = (currentUrl: string) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    redirect_uri: currentUrl,
    response_type: "code",
    // state: "state",
    scope: "repo user",
  };
  const urlParams = new URLSearchParams(params);
  return baseUrl + "?" + urlParams.toString();
};

export const GithubLink = () => {
  const router = useRouter();
  const {
    query: { link, code },
    asPath,
  } = router;
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
  }));

  const [appUrl, setAppUrl] = useState("");

  useEffect(() => {
    let url = new URL(window.location.origin + asPath);
    let params = new URLSearchParams(url.search);
    params.delete("state");
    params.delete("code");
    params.delete("domain");
    params.delete("title");
    params.set("link", "github");
    if (userInfo.domain && userInfo.title) {
      params.set("domain", userInfo.domain);
      params.set("title", userInfo.title);
    }
    let appUrl = url.origin + url.pathname + "?" + params.toString();
    setAppUrl(appUrl);
  }, [userInfo.domain, userInfo.title]);

  useEffect(() => {
    if (link === "github") {
      dispatch(
        linkAccounts({
          data: {
            link: "github",
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
      {userInfo.links.github.connected ? (
        <button
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between !w-[100%] outline-1 bg-focusbackground !text-white`}
          onClick={() => {
            dispatch(
              unlinkAccounts({
                data: {
                  link: "github",
                  code,
                },
                finalFunction: () => { },
              })
            );
          }}
        >
          <span className="text-[14px] sm:text-[16px] text-left">{"Disconnect"}</span>
          <div className="pt-2 text-right">
            <Image src={GithubImg} width={28} height={28} />
          </div>
        </button>
      ) : (
        <a
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 h-[56px] text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] justify-between !w-[100%]`}
          href={githubLinkGenerator(appUrl)}
          target="_blank"
        >
          <span className="text-[14px] sm:text-[16px] text-left">{"Connect"}</span>
          <div className="pt-2 text-right">
            <Image src={GithubImg} width={28} height={28} />
          </div>
        </a>
      )}
    </>
  );
};
