"use client"

import { FolderPlusIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NewForlderForm from "./NewFolderForm";
import { cn } from "@/lib/utils";

const AddNewFolderBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("gap-2")} size={"lg"}>
					<FolderPlusIcon fill="#ffffff" width={24} height={24} />
          Add new
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <NewForlderForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewFolderBtn;
