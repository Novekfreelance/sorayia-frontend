import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import FooterBottomSection from "@/components/ui/FooterBottomSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/SvgIcons";

export default function NotFound() {
  return (
    <main>
      <MaxWidthWrapper className="relative">
        <div className="mx-auto max-w-[610px] text-center h-full">
          <div>
            <span className="text-[300px] leading-[300px] text-black font-semibold">
              404
            </span>
          </div>
          <div>
            <p className="text-primary text-xl-500">
              We are sorry, but the page you requested was not found
            </p>
          </div>
          <div className="flex justify-around mt-5">
            <Button
              asChild
              className="bg-primary uppercase text-white border-2 border-transparent rounded-[2.5rem] text-2xl py-7 px-14 min-w-[255px]"
            >
              <Link href="/">Go home</Link>
            </Button>
            <Button
              asChild
              className="text-primary uppercase bg-white border-2 border-primary rounded-[2.5rem] text-2xl py-7 px-14 hover:bg-initial min-w-[255px]"
            >
              <Link href="/#contact-us"> Contact us</Link>
            </Button>
          </div>
        </div>
        <div className="fixed bottom-0 -left-2/4 translate-x-2/4 w-full">
          <ul className="flex gap-4 justify-center">
            <li className="rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center">
              <Link href="#"><FacebookIcon width={22} height={22} fill="#ffffff" /></Link>
            </li>
            <li className="rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center">
              <Link href="#"><TwitterIcon width={22} height={22} fill="#ffffff" /></Link>
            </li>
            <li className="rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center">
              <Link href="#"><LinkedinIcon width={22} height={22} fill="#ffffff" /></Link>
            </li>
          </ul>
          <FooterBottomSection className="max-w-[90%] mx-auto" />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
