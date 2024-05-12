import { Button } from "@/components/ui/button";
import useGetChatNameStore from "@/store/GetChatNameStore";
import { useRouter } from "next/navigation";
import { FC } from "react";

type OpenYourConversationBtnProps = {
  ChatId: string;
  ChatName: string;
};
const OpenYourConversationBtn: FC<OpenYourConversationBtnProps> = ({
  ChatId,
  ChatName,
}) => {
  const router = useRouter();
  const { setChatName } = useGetChatNameStore();
  const handleClick = () => {
    router.push(`/dashboard/chat/${ChatId}`);
    setChatName(ChatName);
  };
  return (
    <Button className="py-2 px-4 bg-primary" onClick={handleClick}>
      Open
    </Button>
  );
};

export default OpenYourConversationBtn;
