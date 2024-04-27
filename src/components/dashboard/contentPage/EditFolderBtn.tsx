"use client";
import { PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EditForlderForm from "./EditFolderForm";

type EditFolderBtnProps = {
  id: string;
};

const EditFolderBtn: React.FC<EditFolderBtnProps> = ({ id }) => {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  return (
    <>
      <Button
        className="py-2 px-4 bg-transparent border-none hover:bg-accent"
        onClick={() => setShowAddEditNoteDialog(true)}
      >
        <PencilIcon fill="#1D3E80" height={23} width={23} />
      </Button>
      <EditForlderForm
        id={id}
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
};

export default EditFolderBtn;
