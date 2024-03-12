"use client";

import { FolderPlusIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NewForlderForm from "./NewFolderForm";

const AddNewFolderBtn = () => {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  return (
    <>
      <Button
        className={cn("gap-2")}
        size={"lg"}
        onClick={() => setShowAddEditNoteDialog(true)}
      >
        <FolderPlusIcon fill="#ffffff" width={24} height={24} />
        Add new
      </Button>
      <NewForlderForm
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
};

export default AddNewFolderBtn;
