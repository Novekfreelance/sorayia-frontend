"use client";

import { ChatBullIcon, DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type ConversationData = {
  id: string;
  ConversationName: string;
};

export const columns: ColumnDef<ConversationData>[] = [
  {
    accessorKey: "ConversationName",
    header: "Title",
    cell: ({row}) => {
      const conversationData= row.original;
      return (
        <div className="flex items-center justify-center gap-5">
          <ChatBullIcon fill="#1D3E80" height={23} width={23} />
          <h3 className="text-xl-500 text-primary">
            {conversationData.ConversationName}
          </h3>
        </div>
      )
    }
  },
  {
    id: "operations",
    header: "Operations",
    cell: ({ row }) => {
      const conversationData = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(
                `Opening conversation: ${conversationData.id}`
              );
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(
                `Opening conversation: ${conversationData.ConversationName}`
              );
            }}
          >
            <DeleteIcon fill="#1D3E80" height={23} width={23} />
          </Button>
        </div>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const conversationData = row.original;

      return (
        <Button
          className="py-2 px-4 bg-primary"
          onClick={() => {
            console.log(
              `Opening conversation: ${conversationData.ConversationName}`
            );
          }}
        >
          Open
        </Button>
      );
    },
  },
];
