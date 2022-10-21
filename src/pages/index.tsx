import { HomePage } from "modules/HomePage";
import HomePageHeader from "components/HomePageHeader";

const Home = () => {
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