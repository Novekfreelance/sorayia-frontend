import Image from 'next/image';

type CardProps = {
	title: string;
	altText: string;
	imageSrc: string;
	imgWidth: number;
	imgHeight: number;
	description: string;
	flexAlignment: 'flex-row' | 'flex-row-reverse';
	itemsAlignement: 'items-start'| 'items-center' | 'items-end';
	descriptionAlignement: 'text-start' | 'text-center' | 'text-end';
};

const AboutCard: React.FC<CardProps> = ({
	title,
	altText,
	imageSrc,
	imgHeight,
	imgWidth,
	description,
	flexAlignment,
	itemsAlignement,
	descriptionAlignement,
}) => {
	return (
		<div className={`flex flex-col justify-center ${itemsAlignement} gap-5 w-11/12 mx-auto my-5 p-10 h-[450px] rounded border shadow border-solid border-shadowColor`}>
			<div className={`flex ${flexAlignment} gap-5`}>
				<h3 className="text-primary text-2xl self-center">{title}</h3>
				<Image src={imageSrc} alt={altText} width={imgWidth} height={imgHeight} />
			</div>
			<div>
				<p className={`text-xl-400 ${descriptionAlignement}`}>{description}</p>
			</div>
		</div>
	);
};

export default AboutCard;