"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoSorayia from "./ui/Logo";
import { NavLinks, AuthLinks } from "@/components/Link";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = ({ className }) => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const navbarClasses = `${className} navbar fixed left-2/4 z-[99] -translate-x-2/4 top-0 bg-white w-11/12 my-7 mx-auto max-w-screen-xl flex items-center h-20 rounded border border-solid shadow border-shadowColor transition-transform ${
    scrollingDown ? "translate-y-[-110px] transition-transform" : ""
  }`;

  return (
    <nav className={navbarClasses}>
      <MaxWidthWrapper className="flex items-center justify-between pr-7 pl-6">
        <Link href="/">
          <LogoSorayia LogoWidth={181} LogoHeight={49} />
        </Link>
        <NavLinks />
        <ul className="flex items-center gap-4">
          <AuthLinks />
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
