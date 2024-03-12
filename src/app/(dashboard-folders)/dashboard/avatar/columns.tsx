"use client";

import { DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type AvatarDataProps = {
  id: string;
  name: string;
  url: string;
};

export const columns: ColumnDef<AvatarDataProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "Avatar",
    cell: ({ row }) => {
      const AvatarData = row.original;
      return (
        <div className="flex justify-center">
          <Avatar className="w-28 h-28 !rounded">
            <AvatarImage
              className="!rounded"
              src={AvatarData.url}
              alt="avatar"
            />
            <AvatarFallback className="!rounded">
              {AvatarData.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      );
    },
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
    id: "operations",
    header: "Operations",
    cell: ({ row }) => {
      const AvatarData = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening folder: ${AvatarData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening folder: ${AvatarData.name}`);
            }}
          >
            <DeleteIcon fill="#1D3E80" height={23} width={23} />
          </Button>
        </div>
      );
    },
  },
];
