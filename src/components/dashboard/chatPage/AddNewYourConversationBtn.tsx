"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PlusIcon } from "../../icons/SvgIcons";
import { Button } from "../../ui/button";
import AddYourConversationForm from "./createChatStep/AddYourConversationForm";

const AddNewYourConversationBtn = () => {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  return (
    <>
      <Button
        className={cn("gap-1")}
        size={"lg"}
        onClick={() => setShowAddEditNoteDialog(true)}
      >
        <PlusIcon width={25} height={25} fill="#ffffff" />
        Add new
      </Button>
      <AddYourConversationForm
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
};

export default AddNewYourConversationBtn;
