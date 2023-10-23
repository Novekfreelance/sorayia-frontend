import Link from "next/link";
import { FooterAuthLinks, LegalFooterLinks, NavFooterLinks } from "../Link";
import NewsLetterForm from "../NewsLetterForm";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../icons/SvgIcons";

const FooterLinksSection = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="flex">
        <ul className="w-1/2 space-y-3">
          <NavFooterLinks />
        </ul>
        <ul className="w-1/2 space-y-3">
          <LegalFooterLinks />
          <FooterAuthLinks />
        </ul>
      </div>
      <div className="flex">
        <ul className="w-1/3 space-y-3">
          <li className="text-xl-500 text-primary">Contact:</li>
          <li className="text-xl-500 text-primary">
            <Link className="underline" href="mailto:contact@sorayia">
              contact@sorayia
            </Link>
          </li>
          <li className="text-xl-500 text-primary">Social Media</li>
          <ul className="flex gap-4">
            <li>
              <a href="#">
                <FacebookIcon width={22} height={22} fill="#ffffff" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon width={22} height={22} fill="#ffffff" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinIcon width={22} height={22} fill="#ffffff" />
              </a>
            </li>
          </ul>
        </ul>
        <div className="w-2/3 space-y-3">
          <h4 className="text-xl-500 text-primary">
            Subscribe to our newsletter :
          </h4>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
};

export default FooterLinksSection;
