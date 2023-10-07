const FeaturesCardContent = [
  {
    title: "Personalized interaction",
    description:
      "With Sorayia, create personalized 3D virtual influencers that naturally interact with your customers. With their pleasant synthetic voice and natural language understanding, they provide a compelling and personalized experience with everyinteraction.",
  },
  {
    title: "Real-Time Sentiment Analysis",
    description:
      "Observe your audience's emotions in real time with our powerful sentiment analysis technology. Identify positive and negative reactions to adapt your strategies and strengthen your customer engagement",
  },
  {
    title: "Targeting Promising Prospects",
    description:
      "With Sorayia, discover the most interested and promising prospects. Our platform uses relevant data to help you effectively target your potential customers and improve your chances of conversion",
  },
  {
    title: "Automatic Monitoring and Continuous Improvement",
    description:
      "Every interaction is a learning opportunity. Our automatic performance monitoring allows you to continuously analyze and improve the effectiveness of your virtual influencers for an optimal customer experience.",
  },
];

const FeaturesCard = () => {
  return (
    <>
      {FeaturesCardContent.map((Feature, index) => (
        <div key={index} className="flex flex-col items-center">
          <h4 className="text-2xl text-primary text-center mb-3 min-h-[42px] flex items-center justify-center">
            {Feature.title}
          </h4>
          <div className="rounded border shadow border-solid border-shadowColor p-8 flex-grow min-h-[216px] bg-white relative z-[2]">
            <p className="text-center text-xl-400">{Feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesCard;
