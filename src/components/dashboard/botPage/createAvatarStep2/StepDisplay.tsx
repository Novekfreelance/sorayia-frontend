import UseProcessContext from "@/store/CreateBotStore";
import CreateBotStep1 from "../createBotStep1/CreateBotStep1";
import CreateBotStep3 from "../createBotStep3/CreateBotStep3";
import CreateBotStep2 from "./CreateBotStep2";

const StepDisplay = () => {
  const { step } = UseProcessContext();

  return (
    <>
      {/* Use a fragment for single-root grouping */}
      {step === "1" && <CreateBotStep1 />}
      {step === "2" && <CreateBotStep2 />}
      {step === "3" && <CreateBotStep3 />}
      {/* Handle unexpected steps gracefully */}
      {step !== "1" && step !== "2" && step !== "3" && (
        <div>Invalid step: {step}</div>
      )}
    </>
  );
};

export default StepDisplay;
