import { Button } from "@/components/ui/button";
import useGetContentNameStore from "@/store/GetContentNameStore";
import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenFolderBtnProps = {
  FolderId: string;
  FolderName: string;
};
const OpenFolderBtn: FC<OpenFolderBtnProps> = ({ FolderId, FolderName }) => {
  const router = useRouter();
  const { setContentName } = useGetContentNameStore();
  return (
    <Button
      className="py-2 px-4 bg-primary"
      onClick={() => {
        console.log(`Opening conversation: ${FolderId}`);
        router.push(`/dashboard/content/${FolderId}`);
        setContentName(FolderName);
      }}
    >
      Open
    </Button>
  );
};

export default OpenFolderBtn;
