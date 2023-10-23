import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  LogoWidth: number;
  LogoHeight: number;
  className?: string;
}

const LogoSorayia: React.FC<LogoProps> = ({
  LogoWidth,
  LogoHeight,
  className,
}) => {
  return (
      <Image
        src="/sorayia.webp"
        className={cn(className)}
        style={{
          width: "auto",
          height: "auto",
        }}
        alt="logo sorayia"
        width={LogoWidth}
        height={LogoHeight}
      />
  );
};

export default LogoSorayia;
