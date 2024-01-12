"use client";
import { PlusIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const AddNewAvatarBtn = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/dashboard/avatar/create-avatar');
    router.refresh();
  }
  return (
    <Button className={cn("gap-2")} size={"lg"} onClick={onClick}>
      <PlusIcon fill="#ffffff" width={24} height={24} />
      Add new
    </Button>
  );
};

export default AddNewAvatarBtn;
