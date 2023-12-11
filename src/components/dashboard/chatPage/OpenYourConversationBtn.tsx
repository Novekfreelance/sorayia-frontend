import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenYourConversationBtnProps = {
	ChatId: string;
}
const OpenYourConversationBtn: FC<OpenYourConversationBtnProps> = ({ChatId}) => {
	const router = useRouter();
	return (
		<Button
          className="py-2 px-4 bg-primary"
          onClick={() => {
            router.push(`/dashboard/chat/${ChatId}`);
          }}
        >
          Open
        </Button>
	)
}

export default OpenYourConversationBtn