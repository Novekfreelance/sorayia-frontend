import Link from 'next/link';
import { ReactNode } from 'react';

type SocialLinkProps = {
	href: string;
	children: ReactNode;
}

export const SocialLinkBtn: React.FC<SocialLinkProps> = ({ href, children }) => {
	return (
		<li className='rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center'>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				{children}
			</Link>
		</li>
	);
};

type NavigationProps = {
	children: ReactNode;
	className?: string;
}

export const NavigationBtn: React.FC<NavigationProps> = ({children, className}) => {
	return (
		<>
			<div className={`${className} slider-arrow filter drop-shadow-xl rounded-[50%] !w-[36px] !h-[36px] bg-gray-300 flex items-center justify-center`}>
				{children}
			</div>
		</>
	)
}