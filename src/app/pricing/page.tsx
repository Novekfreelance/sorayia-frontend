import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";
import PricingTable from "./components/PricingTable";
import PricingPlan from "./components/PricingPlan";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <main>
      <Header className="relative">
        <Navbar className="relative z-[2] bg-white" />
        <Image
          className="absolute left-0 z-[-1] translate-y-[-60%] pointer-events-none"
          src="/background-blue-2.webp"
          alt=""
          width={379}
          height={761}
        />
      </Header>
      <Hero />
      <PricingTable />
      <PricingPlan />
      <Cta />
      <Contact
        backgroundImageSrc="/background-blue-2.webp"
        imageClassName="absolute bottom-[-60%] left-0 pointer-events-none"
        imageWidth={379}
        imageHeight={761}
      />
      <Footer />
    </main>
  );
};

export default Pricing;
