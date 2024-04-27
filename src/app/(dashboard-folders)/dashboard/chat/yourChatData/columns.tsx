"use client";

import DeleteChatBtn from "@/components/dashboard/chatPage/DeleteChatBtn";
import OpenYourConversationBtn from "@/components/dashboard/chatPage/OpenYourConversationBtn";
import { ChatBullIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type ConversationData = {
  id: string;
  name: string;
  bot: {
    name: string;
  };
};

export const columns: ColumnDef<ConversationData>[] = [
  {
    accessorKey: "name",
    header: "Title",
    cell: ({ row }) => {
      const conversationData = row.original;
      return (
        <div className="flex items-center justify-start gap-5 line-clamp-2">
          <ChatBullIcon fill="#1D3E80" height={23} width={23} />
          <h3 className="text-xl-500 text-primary">{conversationData.name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "bot",
    header: "Associated Bot",
    cell: ({ row }) => {
      const conversationData = row.original;
      return (
        <div className="flex items-center justify-start gap-5 line-clamp-2">
          <h3 className="text-xl-500 text-primary">
            {conversationData.bot.name}
          </h3>
        </div>
      );
    },
  },
  {
    id: "operations",
    header: "Operations",
    cell: ({ row }) => {
      const conversationData = row.original;

      return (
        <div className="flex justify-center items-center gap-1 max-w-[120px]">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening conversation: ${conversationData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <DeleteChatBtn id={conversationData.id} />
        </div>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const conversationData = row.original;

      return <OpenYourConversationBtn ChatId={conversationData.id} />;
    },
  },
];
