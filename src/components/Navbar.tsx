"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { NavLinks, AuthLinks } from "@/components/Link";
import { useState, useEffect } from "react";

type Props = {
  className?: string;
};

let lastScrollTop = 0;

const Navbar: React.FC<Props> = ({ className }) => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollTop = scrollTop; // Mettre à jour la position précédente
    };

    window.addEventListener("scroll", handleScroll); // Écouter l'événement de défilement lorsque le composant est monté

    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    };
  }, []);

  const navbarClasses = `${className} navbar fixed left-2/4 z-[99] -translate-x-2/4 top-0 bg-white w-11/12 my-7 mx-auto max-w-screen-xl flex items-center h-20 rounded border border-solid shadow border-shadowColor transition-transform ${
    scrollingDown ? "translate-y-[-110px] transition-transform" : ""
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between pr-7 pl-6">
        <Link href="/">
          <Logo
            imageSrc="/sorayia.webp"
            alt="sorayia logo"
            LogoWidth={181}
            LogoHeight={49}
          />
        </Link>
        <NavLinks />
        <ul className="flex items-center gap-4">
          <AuthLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
