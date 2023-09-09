// import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'
import Image from 'next/image'

const Testimonials = () => {
	return (
		<section className='relative z-[2] my-20'>
			<SectionTitle>Testimonials</SectionTitle>
			<div className='w-full flex'>
				<div className='min-h-[500px] bg-gray-200 w-3/5 rounded-r border shadow border-solid border-shadowColor relative z-[2]'>
					<div className='flex justify-between flex-col align-middle pl-20 pr-36 pt-24 pb-14 h-full relative z-[4]'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-4xl text-primary'>Our Customers Love Sorayia!</h3>
							<h4 className='text-2xl'>Testimonials from Satisfied Customers</h4>
							<p className='text-xl-400'>Discover enthusiastic feedback from our satisfied
								customers. With Sorayia, they have transformed
								their customer relationships and reached new levels of
								engagement.
							</p>
						</div>
						<div>
							<span className='text-xl text-primary'>Other 100 satisfied costumers</span>
						</div>
					</div>
					<Image
						className="absolute top-[-40%] left-[-10%] z-[3]"
						src="/background-blue-2.webp"
						width={379}
						height={761}
						alt=""
					/>
				</div>
				<div className='w-2/5'></div>
			</div>
			<Image
				className="absolute top-[-50%] left-0 z-[1] pointer-events-none"
				src="/background-blue-2.webp"
				width={379}
				height={761}
				alt=""
			/>
		</section>
	)
}

export default Testimonials