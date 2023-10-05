import Link from "next/link";
import LogoSorayia from "./Logo";

type Props = {
  className?: string;
};

const FooterBottomSection = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full flex justify-between items-center mt-10 mb-6`}
    >
      <Link href="/">
        <LogoSorayia LogoWidth={181} LogoHeight={49} />
      </Link>
      <p className="text-xl-400">
        Copyright © 2023 Sorayia. All rights reserved
      </p>
    </div>
  );
};

export default FooterBottomSection;
