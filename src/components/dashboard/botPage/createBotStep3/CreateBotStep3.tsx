import Step3SwitchButton from "./Step3SwitchButton";
import FolderData from "./chooseFolderData/FolderData";

const CreateBotStep3 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-white rounded shadow border-shadowColor border">
        <div className="min-h-[384px]">
          <FolderData />
        </div>
      </div>
      <Step3SwitchButton />
    </div>
  );
};

export default CreateBotStep3;
