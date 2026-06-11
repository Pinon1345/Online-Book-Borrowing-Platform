import Banner from "@/components/Banner";
import ChooseLibrary from "@/components/ChooseLibrary";
import MarqueePage from "@/components/Marquee";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueePage></MarqueePage>

      {/* Extra Two Components */}

      <PopularCategories></PopularCategories>
      <ChooseLibrary></ChooseLibrary>
      

    </div>
  );
}
