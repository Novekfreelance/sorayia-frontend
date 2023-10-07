import Image from "next/image";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import SectionTitle from "./ui/SectionTitle";
import FeaturesCard from "./ui/FeaturesCard";

const Features = () => {
  return (
    <section id="use-case" className="relative z-[2] my-20">
      <MaxWidthWrapper>
        <SectionTitle>What can sorayia do ?</SectionTitle>
        <h3 className="text-4xl text-primary text-center">
          Your strategic partner to boost your customer engagement
          <br />
          and optimize your sales process
        </h3>
        <div className="relative grid grid-cols-2 gap-y-10 gap-x-40 mt-14">
          <FeaturesCard />
          <Image
            className="absolute z-10 top-[60%] left-2/4 -translate-x-2/4 -translate-y-2/4"
            src="/man-3D-3.webp"
            alt=""
            width={396}
            height={504}
          />
        </div>
      </MaxWidthWrapper>
      <Image
        className="absolute top-[-50%] right-0 z-[1] pointer-events-none"
        src="/background-blue-3.webp"
        width={411}
        height={761}
        alt=""
      />
    </section>
  );
};

export default Features;
