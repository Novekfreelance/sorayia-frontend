import Image from "next/image";

import AboutCard from "./ui/AboutCard";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import SectionTitle from "./ui/SectionTitle";

const About: React.FC = () => {
	return (
		<section className="relative my-20">
			<MaxWidthWrapper>
				<SectionTitle>What is sorayia ?</SectionTitle>
				<div className="relative grid grid-cols-3 h-[700px]">
					<div>
						<AboutCard
							title="Our Story"
							imageSrc="/Quill_Pen.webp"
							altText="Quill Pen icon"
							imgWidth={60}
							imgHeight={60}
							description="Founded with a vision to transform customer engagement,Sorayia was created by a team of passionate experts in artificial intelligence and interactive technologies. We aim to redefine the way businesses connect with their audience using advanced 3D avatar technology"
							flexAlignment="flex-row"
							itemsAlignement="items-start"
							descriptionAlignement="text-start"
						/>
					</div>
					<div className="flex items-center">
						<AboutCard
							title="Our Mission"
							imageSrc="/Launch.webp"
							altText="Launch icon"
							imgWidth={60}
							imgHeight={60}
							description="At Sorayia, our mission is to empower businesses to forge meaningful connections with their customers. We strive to provide cutting-edge solutions that enhance customer experiences, drive sales, and enable seamless interactions between businesses and their audiences"
							flexAlignment="flex-row"
							itemsAlignement="items-center"
							descriptionAlignement="text-center"
						/>
					</div>
					<div className="flex items-end">
						<AboutCard
							title="Why Sorayia ?"
							imageSrc="/Select.webp"
							altText="Select icon"
							imgWidth={60}
							imgHeight={60}
							description="Sorayia stands out as the leading platform in 3D virtual influencers, offering a comprehensive suite of features and tools. Our user-friendly interface, customizable avatars, and real-time insights make us the preferred choice for businesses seeking to elevate their customer engagement strategies"
							flexAlignment="flex-row-reverse"
							itemsAlignement="items-end"
							descriptionAlignement="text-end"
						/>
					</div>
					<h3 className="absolute top-10 right-0 text-end text-3xl text-primary">Discover the Future of Customer Interaction<br />
						with 3D Virtual Influencers!</h3>
				</div>
			</MaxWidthWrapper>
			<Image
				className="absolute top-[-50%] left-0 pointer-events-none"
				src="/background-blue-2.webp"
				width={379}
				height={761}
				alt=""
			/>
		</section>
	)
}

export default About