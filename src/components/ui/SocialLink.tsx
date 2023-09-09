import Link from 'next/link';
import { ReactNode } from 'react';

type SocialLinkProps = {
	href: string;
	children: ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
	return (
		<li className='rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center'>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				{children}
			</Link>
		</li>
	);
};

export default SocialLink;