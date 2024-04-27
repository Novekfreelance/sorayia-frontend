"use client";
import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";
import { ClipboardCheckIcon } from "@/components/icons/SvgIcons";

type CopyInviteLinkBtnProps = {
  linkUrl: string;
};

const CopyInviteLinkBtn: FC<CopyInviteLinkBtnProps> = ({ linkUrl }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  const handleInviteLink = () => {
    navigator.clipboard.writeText(linkUrl);
    setIsCopied(true);
  };
  return (
    <Button className="bg-primary text-xl-500 text-white" onClick={handleInviteLink}>
      {isCopied ? (
        <span className="flex justify-center items-center gap-1">
          <ClipboardCheckIcon width={25} height={25} fill="#ffffff" />
					<span className="text-white h-[22px]">Copied !</span>
        </span>
      ) : (
        "Copy Link"
      )}
    </Button>
  );
};

export default CopyInviteLinkBtn;
