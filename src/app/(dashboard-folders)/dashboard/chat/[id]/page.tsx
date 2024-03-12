"use client";
import ChatContent from "@/components/dashboard/chatPage/ChatContent";
import ChatInput from "@/components/dashboard/chatPage/ChatInput";
import ConversationActionBtn from "@/components/dashboard/chatPage/ConversationActionBtn";
import { FC } from "react";

export type ConversationProps = {
  params: {
    id: string;
  };
};
const ConversationPage: FC<ConversationProps> = ({ params: { id } }) => {
  return (
    <div className="w-full h-full px-8 pt-8 overflow-y-scroll">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl-600 text-black">Conversations</h1>
      </div>
      <div className="flex flex-col w-full h-[94%]">
        <div className="flex items-center justify-between mt-3 py-3 px-2 shadow rounded border-solid border border-shadowColor bg-white">
          <h3 className="text-xl-500 text-primary">Conversation {id}</h3>
          <ConversationActionBtn />
        </div>
        <div className="flex flex-col flex-1 h-full w-full mt-3 px-2 overflow-hidden shadow rounded border border-solid border-shadowColor bg-white relative">
          <ChatContent chatID={id} />
          <div className="absolute bottom-0 inset-x-0 pb-2 px-2">
            <ChatInput chatID={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
