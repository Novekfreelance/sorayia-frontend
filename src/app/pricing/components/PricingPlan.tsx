import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PricingPlan = () => {
  const PricingPlanData = [
    {
      plan: "Basic",
      description: "Unlock the power with our affordable basic package",
      price: {
        amount: 5.8,
        unit: "/month",
      },
      button: {
        content: "Try for free",
        link: "#",
      },
    },
    {
      plan: "Premium",
      description: "Unleash the Full Potential of Sorayia",
      price: {
        amount: 19.8,
        unit: "/month",
      },
      button: {
        content: "Try for free",
        link: "#",
      },
    },
    {
      plan: "Advanced",
      description: "Amplify Customer Engagement",
      price: {
        amount: 49.8,
        unit: "/month",
      },
      button: {
        content: "Try for free",
        link: "#",
      },
    },
  ];
  return (
    <section className="relative z-[2] my-20">
      <Container>
        <div className=" mx-auto flex max-w-[1055px] gap-6">
          {PricingPlanData.map((card, index) => (
            <div
              key={index}
              className="rounded border border-solid shadow border-shadowColor bg-white p-6 space-y-6 text-center w-[340px]"
            >
              <div>
                <h2 className="text-2xl text-primary text-center">
                  {card.plan}
                </h2>
                <p className="text-base-400 h-9 pt-3">{card.description}</p>
              </div>
              <div>
                <h3 className="text-7xl-600 text-primary relative">
                  {card.price.amount}
                  {""}
                  <span className="text-base-400 text-black">
                    {card.price.unit}
                  </span>
                  <span
                    className={`text-2xl absolute -top-[5%] text-black ${
                      card.price.amount.toString().length > 3
                        ? "left-[17%]"
                        : "left-[22%]"
                    }`}
                  >
                    $
                  </span>
                </h3>
              </div>
              <div>
                <Button className="w-full">
                  <Link href={card.button.link}>{card.button.content}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Image
        className="absolute top-[-50%] right-0 -z-[1] pointer-events-none"
        src="/background-blue-3.webp"
        width={379}
        height={761}
        alt=""
      />
    </section>
  );
};

export default PricingPlan;
