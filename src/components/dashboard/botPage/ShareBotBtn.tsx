"use client";
import { ShareIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ShareBotDialog from "./ShareBotDialog";

const ShareBotBtn = ({ id }: { id: string }) => {
  const [showShareBotDialog, setShowShareBotDialog] = useState(false);
  return (
    <>
      <Button
        className="py-2 px-4 bg-transparent border-none hover:bg-accent"
        onClick={() => setShowShareBotDialog(true)}
      >
        <ShareIcon fill="#1D3E80" height={23} width={23} />
      </Button>
      <ShareBotDialog
        id={id}
        open={showShareBotDialog}
        setOpen={setShowShareBotDialog}
      />
    </>
  );
};

export default ShareBotBtn;
