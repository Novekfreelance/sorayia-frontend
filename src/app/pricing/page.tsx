import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import PrincingHero from "@/components/ui/PricingHero";
import PricingTable from "@/components/ui/PricingTable";
import PricingPlan from "@/components/ui/PricingPlan";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PricingCta from "@/components/ui/PricingCta";

const Pricing = () => {
  return (
    <main>
      <Header className="relative">
        <Navbar className="z-[2] bg-white" />
        <Image
          className="absolute left-0 z-[-1] translate-y-[-60%] pointer-events-none"
          src="/background-blue-2.webp"
          alt=""
          width={379}
          height={761}
        />
      </Header>
      <PrincingHero />
      <PricingTable />
      <PricingPlan />
      <PricingCta/>
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
