import Head from "next/head";
import { HomePage } from "modules/HomePage";
import { BannerImage } from "modules/HomePage/BannerImage";
import HomePageHeader from "components/HomePageHeader";

const Home = () => {
  return (
    <HomePageHeader>
      <div className="py-2">
        <main className="max-w-[93rem] mx-auto flex-1 px-5 sm:px-11">
          <HomePage />
          <div className="hidden sm:block absolute top-0 right-0 -z-10"><BannerImage /></div>
        </main>
      </div>
    </HomePageHeader>
  );
}
export default Home;