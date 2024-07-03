import Footer from "@/components/Footer";
import Ecosystem from "@/components/about/Ecosystem";
import Elevating from "@/components/about/Elevating";
import Restakers from "@/components/about/Restakers";
import Trust from "@/components/about/Trust";
import Validator from "@/components/about/Validator";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Trust />
      <Elevating />
      <Restakers />
      <Validator />
      <Ecosystem />
      <Footer />
    </div>
  );
}
