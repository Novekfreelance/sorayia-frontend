import Image from 'next/image';

interface LogoProps {
  imageSrc: string;
  text?: string;
  alt: string;
  LogoWidth: number;
  LogoHeight: number;
}

const Logo: React.FC<LogoProps> = ({ imageSrc, text, alt, LogoWidth, LogoHeight }) => {
  return (
    <div className="logo">
      {imageSrc ? (
        <Image src={imageSrc}
        alt= {alt}
        width={LogoWidth}
        height={LogoHeight}
        className='max-w-[100%] h-auto'/>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default Logo;