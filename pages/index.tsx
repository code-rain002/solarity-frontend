import Head from "next/head";
import { Banner } from "../components/modules/Banner";
import { BannerImage } from "../components/modules/Banner/BannerImage";

export default function Home() {
  return (
    <div className="py-2">
      <main className="max-w-[93rem] mx-auto flex-1 px-5 sm:px-11">
        <Banner />
        <div className="hidden sm:block absolute top-0 right-0 -z-10"><BannerImage /></div>
      </main>
    </div>
  );
}
