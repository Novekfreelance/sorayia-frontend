import Container from "@/components/ui/Container";

const PricingTable = () => {
  const pricingData = [
    {
      plan: "Basic",
      advantages: [
        "2.500 Credits",
        "GPT 3.5 16K",
        "3 Users",
        "1.000 Documents",
        "Embed website widget",
        "Custumize Website Widget",
      ],
    },
    {
      plan: "Premium",
      advantages: [
        "10.000 Credits",
        "GPT 3.5 16K",
        "GPT 4",
        "15 Users",
        "10.000 Documents",
        "10.000 Websites pages",
        "Websites Crawler",
        "Embed Website Widget (3 websites)",
        "Remove sorayia branding on widget",
        "API",
      ],
    },
    {
      plan: "Advanced",
      advantages: [
        "25.000 Credits",
        "GPT 3.5 16K",
        "GPT 4",
        "50 Users",
        "25.000 Documents",
        "25.000 Websites pages",
        "Websites Crawler",
        "Embed Website Widget 50 websites)",
        "Customize Website Widget",
        "Remove sorayia branding on widget",
        "API",
      ],
    },
  ];

  // Trouver la longueur maximale parmi les avantages de toutes les colonnes
  const maxLength = Math.max(
    ...pricingData.map((item) => item.advantages.length)
  );

  // Remplir les colonnes avec des chaînes vides pour atteindre la longueur maximale
  const filledPricingData = pricingData.map((item) => ({
    plan: item.plan,
    advantages: [
      ...item.advantages,
      ...Array(maxLength - item.advantages.length).fill(""),
    ],
  }));

  return (
    <section>
      <Container>
        <table className="border border-black border-collapse mx-auto max-w-[1035px]">
          <thead className="border">
            <tr>
              {filledPricingData.map((item, index) => (
                <th
                  className="text-primary text-xl-500 text-center border border-black h-10"
                  key={index}
                >
                  {item.plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filledPricingData[0].advantages.map((_, index) => (
              <tr key={index}>
                {filledPricingData.map((item, itemIndex) => (
                  <td
                    className="text-center text-xl-400 border border-black h-10 px-2 min-w-[340px]"
                    key={itemIndex}
                  >
                    {item.advantages[index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
};

export default PricingTable;
