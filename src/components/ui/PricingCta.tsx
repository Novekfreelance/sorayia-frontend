import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PricingCta = () => {
  return (
    <section className="my-20">
      <MaxWidthWrapper className="space-y-5 text-center">
        <h2 className="text-center text-primary text-4xl">
          Discover the world of 3D virtual influencers with <br /> our free version
        </h2>
        <p className="text-2xl text-black text-center">
          Take avantages of this offer to familiarized yourself with our
          services and see how our virtual <br /> influencer can enhance your customer
          interaction. Join us today.
        </p>
        <Button className="rounded">
          <Link className="text-2xl" href="#">
            Discover Free Demo
          </Link>
        </Button>
        <h2 className="max-w-[311.67px] text-center text-xl mx-auto">
          No Credit Card required
        </h2>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingCta;
