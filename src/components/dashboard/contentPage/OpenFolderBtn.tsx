import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenFolderBtnProps = {
	ChatId: string;
}
const OpenFolderBtn: FC<OpenFolderBtnProps> = ({ChatId}) => {
	// const router = useRouter();
	return (
		<Button
          className="py-2 px-4 bg-primary"
          onClick={() => {
						console.log(
							`Opening conversation: ${ChatId}`
						);
            // router.push(`/dashboard/content/${ChatId}`);
          }}
        >
          Open
        </Button>
	)
}

export default OpenFolderBtn