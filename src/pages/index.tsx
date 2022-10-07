import { HomePage } from "modules/HomePage";
import { BannerImage } from "modules/HomePage/BannerImage";
import HomePageHeader from "components/HomePageHeader";
import { RootStateOrAny, useSelector } from "react-redux";

const Home = () => {

  const { appLoading } = useSelector((state: RootStateOrAny) => ({
    appLoading: state.common.appLoading
  }))
  return (
    <HomePageHeader>
      <div className="py-2">
        <main className="max-w-[93vw] mx-auto flex-1 px-5 sm:px-11">
          <HomePage />
        </main>
      </div>
    </HomePageHeader>
  );
}
export default Home;