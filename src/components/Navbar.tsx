"use client"
import Link from "next/link";
import Logo from "./ui/Logo";
import { NavLinks, AuthLinks } from "@/components/Link";
import ScrollListener from "./ScrollListener";
import { useState } from "react";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = ({ className }) => {
  const [scrollingDown, setScrollingDown] = useState(false);

  // Cette fonction gère le scroll
  const handleScroll = (isScrollingDown: boolean) => {
    setScrollingDown(isScrollingDown);
  };

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
      <ScrollListener onScroll={handleScroll} />
    </nav>
  );
};

export default Navbar;