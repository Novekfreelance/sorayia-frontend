import Image from 'next/image';
import SectionTitle from "./ui/SectionTitle";
import ContactForm from './ContactForm';

type Props = {
	backgroundImageSrc: string,
	imageClassName?: string;
	imageWidth?: number,
	imageHeight?: number,
}

const Contact = ({ backgroundImageSrc, imageClassName, imageWidth, imageHeight } :Props) => {
	return (
		<section id='contact-us' className='relative z-[2] my-20'>
			<SectionTitle>Contact Us</SectionTitle>
			<div className='w-full flex relative'>
				<div className='w-2/5'>
					<div className='absolute right-[52%] top-[50%] translate-y-[-50%] z-[3] bg-primary w-2/5 h-5/6 rounded flex items-center'>
						<ContactForm />
					</div>
				</div>
				<div className='min-h-[500px] bg-gray-200 w-3/5 border rounded shadow border-solid border-shadowColor relative z-[2]'>
					<div className='flex justify-center flex-col gap-5 align-middle pr-20 pl-36 h-full'>
						<h3 className='text-4xl text-primary text-end'>We&apos;re here to help!</h3>
						<p className='text-xl-400 text-end'>
							Do you have any questions or need additional
							information about Sorayia and our services? Do not
							hesitate to contact us by filling out the form below.
							Our dedicated team is ready to answer your requests
							and help you discover how our 3D virtual influencers can
							transform your customer interaction. We look forward to
							talking with you!
						</p>
					</div>
				</div>
			</div>
			<Image
				className={imageClassName}
				src={backgroundImageSrc}
				width={imageWidth}
				height={imageHeight}
				alt=""
			/>
		</section >
	)
}

export default Contact