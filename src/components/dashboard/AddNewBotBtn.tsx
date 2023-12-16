"use client"
import { useRouter } from "next/navigation";
import { PlusIcon } from "../icons/SvgIcons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const AddNewBotBtn = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/dashboard/bot/create-bot");
    router.refresh();
  };
  return (
    <Button className={cn("gap-1")} size={"lg"} onClick={onClick}>
      <PlusIcon width={25} height={25} fill="#ffffff" />
      Add new
    </Button>
  );
};

export default AddNewBotBtn;
