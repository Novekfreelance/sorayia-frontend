import { FC } from "react";

type ChatContentProps = {
  chatID: string;
};

const ChatContent:FC<ChatContentProps> = ({chatID}) => {
	return (
		<div className="flex-1 flex justify-center items-center">ChatContent</div>
	)
}

export default ChatContent