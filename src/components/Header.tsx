import Image from "next/image";
import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";

const Header = () => {
	return (
		<header className='w-full pt-7'>
			<Navbar />
			<HeroBanner />
			<Image className="absolute top-0 right-0 pointer-events-none"
			src="/background-blue-1.webp"
			alt=""
			width={358}
			height={508}
			/>
		</header>
	)
}

export default Header