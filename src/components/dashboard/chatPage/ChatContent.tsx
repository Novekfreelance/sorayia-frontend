import { BotIcon } from "@/components/icons/SvgIcons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";
import { FC } from "react";
import UserAvatar from "../profil/UserAvatar";

type ChatContentProps = {
  chatID: string;
};

const ChatContent: FC<ChatContentProps> = ({ chatID }) => {
  return (
    <div className="flex flex-1 pb-56">
      <ScrollArea className="w-full h-[388px] flex justify-center items-end space-y-5">
        <div className="flex justify-between items-center gap-3 w-full px-10">
          <div className="flex justify-start gap-5 min-h-[88px] items-center">
            <UserAvatar />
            <p>Hello</p>
          </div>
          <div>
            <Copy
              onClick={() => navigator.clipboard.writeText(chatID)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 w-full px-10 bg-accent">
          <div className="flex justify-start gap-5 min-h-[88px] items-center">
            <BotIcon width={40} height={40} fill="black" />
            <p>Hello, how can I help you today?</p>
          </div>
          <div>
            <Copy className="cursor-pointer" />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatContent;
