import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenFolderBtnProps = {
	FolderId: string;
}
const OpenFolderBtn: FC<OpenFolderBtnProps> = ({FolderId}) => {
	const router = useRouter();
	return (
		<Button
          className="py-2 px-4 bg-primary"
          onClick={() => {
						console.log(
							`Opening conversation: ${FolderId}`
						);
            router.push(`/dashboard/content/${FolderId}`);
          }}
        >
          Open
        </Button>
	)
}

export default OpenFolderBtn