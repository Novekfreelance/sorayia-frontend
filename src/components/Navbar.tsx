import Link from 'next/link';
import Logo from './ui/Logo';
import { NavLinks, AuthLinks } from '@/components/Link';

const Navbar: React.FC = () => {
	return (
		<nav className='w-11/12 mx-auto max-w-screen-xl flex items-center h-20 rounded border border-solid shadow border-shadowColor'>
			<div className='w-full max-w-[1200px] mx-auto flex items-center justify-between pr-7 pl-6'>
				<Link href="/">
					<Logo
						imageSrc="/sorayia.webp"
						alt="sorayia logo"
						LogoWidth={181}
						LogoHeight={49} />
				</Link>
				<NavLinks />
				<ul className='flex items-center gap-4'>
					<AuthLinks />
				</ul>
			</div>
		</nav>
	)
}

export default Navbar