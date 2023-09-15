'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation';


const Links = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "Use case",
		href: "#use-case",
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
              className={`text-xl ${isActive ? 'text-primary' : ''}`}
            >
              {Navlink.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};


// Component for rendering footer links
export const NavFooterLinks = () => {
	return (
		<>
			{Links.map((Footerlink, index) => (
				<li key={index}>
					<Link
						href={Footerlink.href}
						className="text-xl-600 text-primary">
						{Footerlink.text}
					</Link>
				</li>
			))}
		</>
	)
}

// Define an array of authentication links
const Authlinks = [
	{
		text: "login",
		href: "/login",
	},
	{
		text: "join free",
		href: "/signup",
	},
];

// Component for rendering authentication links
export const AuthLinks = () => {
	return (
		<>
			{Authlinks.map((AuthLink, index) =>
				<li key={index}>
					<Link
						href={AuthLink.href}
						className={`text-xl ${index === 1 ? 'text-primary' : ''}`}>
						{AuthLink.text}
					</Link>
				</li>
			)}
		</>
	)
}

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

export const LegalFooterLinks = () => {
	return (
		<>
			{LegalFooterLinksData.map((LegalFooterLink, index) => (
				<li key={index}>
					<Link
						href={LegalFooterLink.href}
						className='text-xl-600 text-primary'
					>
						{LegalFooterLink.text}
					</Link>
				</li>
			))}
		</>

	)
}

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

export const FooterAuthLinks = () => {
	return (
		<>
			{AuthFooterLinksData.map((FooterAuthLinkData, index) =>
				<li key={index}>
					<Link
						href={FooterAuthLinkData.href}
						className="text-xl-600 text-primary"
						>
						{FooterAuthLinkData.text}
					</Link>
				</li>
			)}
		</>
	)
}
