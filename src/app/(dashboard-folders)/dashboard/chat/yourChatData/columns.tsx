"use client";

import OpenYourConversationBtn from "@/components/dashboard/chatPage/OpenYourConversationBtn";
import { DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ConversationData = {
  id: string;
  ConversationName: string;
};

export const columns: ColumnDef<ConversationData>[] = [
  {
    accessorKey: "ConversationName",
    header: "Title",
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
              // Handle opening the conversation in another page
              // You can use React Router or useNavigate here
              console.log(`Opening conversation: ${conversationData.id}`);
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
        <OpenYourConversationBtn ChatId={conversationData.id} />
      );
    },
  },
];
