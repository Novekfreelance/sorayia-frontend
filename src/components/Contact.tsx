import Image from 'next/image';
import SectionTitle from "./ui/SectionTitle";
import ContactForm from './ui/ContactForm';

const Contact = () => {
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
				className="absolute top-[-50%] right-0 z-[1] pointer-events-none"
				src="/background-blue-3.webp"
				width={379}
				height={761}
				alt=""
			/>
		</section >
	)
}

export default Contact