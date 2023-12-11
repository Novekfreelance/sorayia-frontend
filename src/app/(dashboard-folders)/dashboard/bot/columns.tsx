"use client";

import { DeleteIcon, PencilIcon, ShareIcon } from "@/components/icons/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BotData = {
  id: string;
  avatar: string;
  name: string;
  description: string;
  createDate: string;
  model: string;
};

export const columns: ColumnDef<BotData>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const BotData = row.original;

      return (
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage
              className="rounded"
              src={BotData.avatar}
              alt="avatar"
            />
            <AvatarFallback>
              {BotData.avatar.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "createDate",
    header: "Created on",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createDate"));
      const formatted = date.toLocaleDateString();
      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const BotData = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              // Handle opening the conversation in another page
              // You can use React Router or useNavigate here
              console.log(`Opening conversation: ${BotData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              // Handle opening the conversation in another page
              // You can use React Router or useNavigate here
              console.log(`Opening conversation: ${BotData.id}`);
            }}
          >
            <DeleteIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              // Handle opening the conversation in another page
              // You can use React Router or useNavigate here
              console.log(`Opening conversation: ${BotData.id}`);
            }}
          >
            <ShareIcon fill="#1D3E80" height={23} width={23} />
          </Button>
        </div>
      );
    },
  },
];
