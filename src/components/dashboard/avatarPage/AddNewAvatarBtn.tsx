"use client";

import { PlusIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AddNewAvatarBtn = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Button className={cn("gap-2")} size={"lg"} onClick={handleClick}>
      <PlusIcon fill="#ffffff" width={24} height={24} />
      Add new
    </Button>
  );
};

export default AddNewAvatarBtn;
