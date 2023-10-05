import Link from "next/link";
import Image from "next/image";
import { FooterAuthLinks, LegalFooterLinks, NavFooterLinks } from "../Link";
import {SocialLinkBtn} from "./CustumsBtn";
import NewsLetterForm from "../NewsLetterForm";

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
						<Link className="underline" href="mailto:contact@sorayia">contact@sorayia</Link>
					</li>
					<li className="text-xl-500 text-primary">Social Media</li>
					<ul className="flex gap-4">
						<SocialLinkBtn href="#">
							<Image
								src="/facebook.webp"
								alt="facebook logo"
								width={22}
								height={22}
							/>
						</SocialLinkBtn>
						<SocialLinkBtn href="#">
							<Image
								src="/twitter.webp"
								alt="twitter logo"
								width={22}
								height={22}
							/>
						</SocialLinkBtn>
						<SocialLinkBtn href="#">
							<Image
								src="/linkedin.webp"
								alt="linkedin logo"
								width={22}
								height={22}
							/>
						</SocialLinkBtn>
					</ul>
				</ul>
				<div className="w-2/3 space-y-3">
					<h4 className="text-xl-500 text-primary">Subscribe to our newsletter :</h4>
					<NewsLetterForm />
				</div>
			</div>
		</div>
	)
}

export default FooterLinksSection