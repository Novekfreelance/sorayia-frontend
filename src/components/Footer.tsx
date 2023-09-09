import Image from "next/image";
import Container from "./ui/Container";
import FooterLinksSection from "./ui/FooterLinksSection";
import FooterBottomSection from "./ui/FooterBottomSection";
// import bgBlueImg from '@/assets/background-blue2.png';


const Footer = () => {
	return (
		<section className="mt-20 border-t border-solid border-gray-200">
			<footer className="pt-10">
				<Container>
					<FooterLinksSection />
					<FooterBottomSection />
				</Container>
			</footer>
		</section>
	)
}

export default Footer