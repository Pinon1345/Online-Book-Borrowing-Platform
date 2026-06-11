import Banner from "@/components/Banner";
import ChooseLibrary from "@/components/ChooseLibrary";
import Footer from "@/components/Footer";
import MarqueePage from "@/components/Marquee";
import PopularCategories from "@/components/PopularCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueePage></MarqueePage>

      {/* Extra Two Components */}
      
      <PopularCategories></PopularCategories>
      <ChooseLibrary></ChooseLibrary>
      
      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}
