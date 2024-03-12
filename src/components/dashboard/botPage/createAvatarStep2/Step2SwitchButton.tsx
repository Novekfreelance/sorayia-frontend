"use client";
import UseProcessContext from "@/app/store/CreateBotStore";
import { Button } from "@/components/ui/button";

const Step2SwitchButton = () => {
  const { setStep } = UseProcessContext();
  const handleNext = () => {
    setStep("3");
  };
  const handlePrev = () => {
    setStep("1");
  };
  return (
    <div className="flex justify-between mt-5 w-8/12">
      <Button className="text-xl bg-primary hover:bg-primary-300 py-7 uppercase" onClick={handlePrev}>Prev</Button>
      <Button className="text-xl bg-primary hover:bg-primary-300 py-7 uppercase" onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Step2SwitchButton;
