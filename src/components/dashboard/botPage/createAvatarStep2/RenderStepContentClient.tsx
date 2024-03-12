"use client";
import Spinner from "@/components/icons/Spinner";
import useIsClient from "@/hooks/useIsClient";
import StepDisplay from "./StepDisplay";

const RenderStepContentClient = () => {
  const isClient = useIsClient();
  return (
    <>
      {isClient ? (
        <>
          <StepDisplay />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default RenderStepContentClient;
