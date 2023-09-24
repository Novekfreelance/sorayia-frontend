"use client"
import { useEffect} from "react";

const ScrollListener = ({ onScroll }: { onScroll: (scrollingDown: boolean) => void }) => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      onScroll(scrollTop > lastScrollTop);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);

  return null;
};

export default ScrollListener;
