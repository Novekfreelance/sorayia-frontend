"use client";
import useAuthStore from "@/app/store/AuthStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Use case",
    href: "/#use-case",
  },
  {
    text: "Contact us",
    href: "#contact-us",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="relative z-[2] flex items-center gap-7">
      {Links.map((Navlink, index) => {
        const isActive = pathname === Navlink.href;

        return (
          <li key={index}>
            <Link
              href={Navlink.href}
              className={`text-xl ${isActive ? "text-primary" : ""}`}
            >
              {Navlink.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const NavFooterLinks = () => {
  return (
    <>
      {Links.map((Footerlink, index) => (
        <li key={index}>
          <Link href={Footerlink.href} className="text-xl-600 text-primary">
            {Footerlink.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export const AuthLinks = () => {
  const { toggleForm } = useAuthStore();

  const Authlinks = [
    {
      text: "login",
      href: "/sign-in",
      formType: "login",
    },
    {
      text: "join free",
      href: "/sign-up",
      formType: "register",
    },
  ];

  return (
    <>
      {Authlinks.map((AuthLink, index) => (
        <li key={index}>
          <Link
            href={AuthLink.href}
            className={`text-xl ${index === 1 ? "text-primary" : ""}`}
            onClick={toggleForm}
          >
            {AuthLink.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export const LegalFooterLinks = () => {
  const LegalFooterLinksData = [
    {
      text: "Terms & Conditions",
      href: "/terms",
    },
    {
      text: "Privacy Policy",
      href: "/privacy",
    },
  ];

  return (
    <>
      {LegalFooterLinksData.map((LegalFooterLink, index) => (
        <li key={index}>
          <Link
            href={LegalFooterLink.href}
            className="text-xl-600 text-primary"
          >
            {LegalFooterLink.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export const FooterAuthLinks = () => {
  const AuthFooterLinksData = [
    {
      text: "sign in",
      href: "/sign_in",
    },
    {
      text: "sign up",
      href: "/sign_up",
    },
  ];
  return (
    <>
      {AuthFooterLinksData.map((FooterAuthLinkData, index) => (
        <li key={index}>
          <Link
            href={FooterAuthLinkData.href}
            className="text-xl-600 text-primary"
          >
            {FooterAuthLinkData.text}
          </Link>
        </li>
      ))}
    </>
  );
};
