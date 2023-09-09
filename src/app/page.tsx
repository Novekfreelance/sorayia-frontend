import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
