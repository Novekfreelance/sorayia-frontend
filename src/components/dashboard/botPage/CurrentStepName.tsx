"use client";
import UseProcessContext from "@/store/CreateBotStore";

const CurrentStepName = () => {
  const { step } = UseProcessContext();
  const currenStepName =
    step === "1"
      ? "General"
      : step === "2"
      ? "Choice your avatar"
      : "Add knowledge";
  return (
    <div>
      <span className="text-xl-400 text-gray-300">
        Step: {step} -
        <span className="text-primary text-xl-400">{currenStepName}</span>
      </span>
    </div>
  );
};

export default CurrentStepName;
