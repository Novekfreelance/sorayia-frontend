"use client"
import { useRouter } from "next/navigation";
import { PlusIcon } from "../icons/SvgIcons";
import { Button } from "../ui/button";

const AddNewBotBtn = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/dashboard/bot/create-bot");
  };
  return (
    <Button size={"lg"} onClick={onClick}>
      <PlusIcon width={25} height={25} fill="#ffffff" />
      Add new
    </Button>
  );
};

export default AddNewBotBtn;
