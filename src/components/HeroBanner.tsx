import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";

const HeroBanner = () => {
	return (
		<MaxWidthWrapper className="mt-28">
			<div className="flex items-center justify-center">
				<div className="w-3/5">
					<h1 className="text-5xl text-primary mb-20">
						Transform Customer Interaction<br />
						with our Custom 3D Virtual
						Influencers!
					</h1>
					<Button className="rounded">
						<Link className="text-2xl" href="#">Discover Free Demo</Link>
					</Button>
					<h2 className="max-w-[311.67px] text-center text-xl pt-5">No Credit Card required</h2>
				</div>
				<div className="w-2/5 flex justify-end">
					<Image
						className="pointer-events-none"
						src='/Female_virtual_assistant.webp'
						width={383}
						height={527}
						alt="Virtual Assistant"
					/>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default HeroBanner