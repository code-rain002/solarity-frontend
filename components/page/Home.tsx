import Head from "next/head";
import { Banner } from "../modules/Banner";
import { BannerImage } from "../modules/Banner/BannerImage";

export default function HomePage() {
  return (
    <div className="py-2">
      <main className="max-w-[93rem] mx-auto flex-1 px-5 sm:px-11">
        <Banner />
        <div className="hidden sm:block absolute top-0 right-0"><BannerImage /></div>
      </main>
    </div>
  );
}