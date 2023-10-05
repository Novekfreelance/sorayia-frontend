import Image from "next/image";
import MaxWidthWrapper from './ui/MaxWidthWrapper';
import SectionTitle from './ui/SectionTitle';
import FeaturesCard from './ui/FeaturesCard';

const Features = () => {
	return (
		<section id="use-case" className="relative z-[2] my-20">
			<MaxWidthWrapper>
				<SectionTitle>What can sorayia do ?</SectionTitle>
				<h3 className="text-4xl text-primary text-center">Your strategic partner to boost your customer engagement<br />
					and optimize your sales process</h3>
				<div className='grid grid-cols-2 gap-10 mt-14'>
					<FeaturesCard/>
				</div>
			</MaxWidthWrapper>
			<Image
				className="absolute top-[-50%] right-0 z-[1] pointer-events-none"
				src="/background-blue-3.webp"
				width={411}
				height={761}
				alt=""
			/>
		</section>
	)
}

export default Features