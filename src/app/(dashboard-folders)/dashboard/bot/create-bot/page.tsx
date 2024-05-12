import CurrentStepName from "@/components/dashboard/botPage/CurrentStepName";
import RenderStepContentClient from "@/components/dashboard/botPage/createAvatarStep2/RenderStepContentClient";
import { ArrowLeftIcon } from "@/components/icons/SvgIcons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const CreateBotPage = () => {
  return (
    <div className="w-full px-8 pb-8 relative">
      <div className="sticky pt-8 w-full top-0 left-0 bg-gray-50 flex flex-col items-center z-10 mb-6">
        <div className="flex justify-between items-center w-full mb-4 relative">
          <Link href="/dashboard/bot" className="cursor-pointer text-primary">
            <ArrowLeftIcon width={23} height={23} />
          </Link>
          <h1 className="text-3xl-600 text-primary text-center">
            Customize your bot
          </h1>
          <CurrentStepName />
        </div>
        <Separator className="mt-3" />
      </div>
      <RenderStepContentClient />
    </div>
  );
};

export default CreateBotPage;
