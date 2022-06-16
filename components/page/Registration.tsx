import Head from "next/head";
import { GeneralInfo } from "../modules/Auth/GeneralInfo";
import { Banner } from "../modules/Banner";
import { BannerImage } from "../modules/Banner/BannerImage";

export default function Registration() {
  return (
    <div className="py-2">
      <main className="max-w-[110rem] mx-auto flex-1 px-5 sm:px-11">
        <div className="round-glow-1"></div>
        <div className="round-glow-2"></div>
        <div className="round-glow-3"></div>
        <GeneralInfo />
      </main>
    </div>
  );
}