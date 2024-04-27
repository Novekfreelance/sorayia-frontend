"use client";

import DeleteBotBtn from "@/components/dashboard/botPage/DeleteBotBtn";
import ShareBotBtn from "@/components/dashboard/botPage/ShareBotBtn";
import { PencilIcon } from "@/components/icons/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type BotDataProps = {
  id: string;
  avatar: {
    id: string;
    name: string;
    url: string;
  };
  name: string;
  description: string;
  // createDate: string;
  model: string;
};

export const columns: ColumnDef<BotDataProps>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const BotData = row.original;

      return (
        <div className="flex justify-center">
          <Avatar className="h-16 w-16">
            <AvatarImage
              className="rounded"
              src={BotData.avatar.url}
              alt="avatar"
            />
            <AvatarFallback>
              {BotData.name.slice(0, 2).toLocaleUpperCase()}
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
    cell: ({ row }) => {
      const BotData = row.original;
      return (
        <div className="text-center font-medium max-w-xs mx-auto cursor-default line-clamp-2">
          {BotData.description}
        </div>
      );
    },
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  // {
  //   accessorKey: "createDate",
  //   header: "Created on",
  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("createDate"));
  //     const formatted = date.toLocaleDateString();
  //     return <div className="text-center font-medium">{formatted}</div>;
  //   },
  // },
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
              console.log(`Opening conversation: ${BotData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <DeleteBotBtn id={BotData.id} />
          <ShareBotBtn id={BotData.id} />
        </div>
      );
    },
  },
];
