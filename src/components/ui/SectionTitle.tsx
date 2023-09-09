import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode
}

const SectionTitle = ({ children }: Props) => {
	return (
		<h2 className='text-center text-2xl mb-9'>
			{children}
		</h2>
	)
}

export default SectionTitle