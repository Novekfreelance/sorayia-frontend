import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import FooterLinksSection from "./ui/FooterLinksSection";
import FooterBottomSection from "./ui/FooterBottomSection";


const Footer = () => {
	return (
		<section className="mt-20 border-t border-solid border-gray-200">
			<footer className="pt-10">
				<MaxWidthWrapper>
					<FooterLinksSection />
					<FooterBottomSection />
				</MaxWidthWrapper>
			</footer>
		</section>
	)
}

export default Footer