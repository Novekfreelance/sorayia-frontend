import { ScrollArea } from "@/components/ui/scroll-area";
import Step2SwitchButton from "./Step2SwitchButton";
import { CreateAvatarData } from "./createAvatarData/CreateAvatarData";

const CreateBotStep2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ScrollArea className="w-8/12 h-96 px-4">
        <CreateAvatarData />
      </ScrollArea>
      <Step2SwitchButton />
    </div>
  );
};

export default CreateBotStep2;
