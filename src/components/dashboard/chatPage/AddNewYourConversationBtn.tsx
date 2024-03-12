"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { PlusIcon } from "../../icons/SvgIcons";
import { Button } from "../../ui/button";

const AddNewYourConversationBtn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/chat/create-chat");
  };
  return (
    <Button className={cn("gap-1")} size={"lg"} onClick={handleClick}>
      <PlusIcon width={25} height={25} fill="#ffffff" />
      Add new
    </Button>
  );
};

export default AddNewYourConversationBtn;
