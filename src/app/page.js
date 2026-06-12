import Banner from "@/components/Banner";
import ChooseLibrary from "@/components/ChooseLibrary";
import MarqueePage from "@/components/Marquee";
import PopularCategories from "@/components/PopularCategories";
import TopBooks from "@/components/TopBooks";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueePage></MarqueePage>
      <TopBooks></TopBooks>

      {/* Extra Two Components */}

      <PopularCategories></PopularCategories>
      <ChooseLibrary></ChooseLibrary>


    </div>
  );
}
