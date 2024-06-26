import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header>
        <Navbar />
        <HeroBanner />
        <Image
          className="absolute -top-[50%] right-0 pointer-events-none z-[100]"
          src="/background-blue-3.webp"
          alt=""
          width={411}
          height={761}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </Header>
      <About />
      <Features />
      <Testimonials />
      <Contact
        backgroundImageSrc="/background-blue-3.webp"
        imageClassName="absolute top-[-50%] right-0 z-[1] pointer-events-none"
        imageWidth={411}
        imageHeight={761}
      />
      <Footer />
    </main>
  );
}
