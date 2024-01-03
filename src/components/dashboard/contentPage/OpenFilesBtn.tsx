import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenFilesBtnProps = {
	FilesId: string;
}
const OpenFilesBtn: FC<OpenFilesBtnProps> = ({FilesId}) => {
	const router = useRouter();
	return (
		<Button
          className="py-2 px-4 bg-primary"
          onClick={() => {
						console.log(
							`Opening conversation: ${FilesId}`
						);
            router.push(`/dashboard/content/${FilesId}`);
          }}
        >
          Open
        </Button>
	)
}

export default OpenFilesBtn