"use client";

import { DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type AvatarDataProps = {
  id: string;
  AvatarName: string;
	avatar: string;
	createDate: string;
};

export const columns: ColumnDef<AvatarDataProps>[] = [
  {
    accessorKey: "AvatarName",
    header: "Name",
  },
	{
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const AvatarData = row.original;
      return (
        <div className="flex justify-center">
          <Avatar className="w-28 h-28 !rounded">
            <AvatarImage
              className="!rounded"
              src={AvatarData.avatar}
              alt="avatar"
            />
            {/* <AvatarFallback className="!rounded">
              {AvatarData.avatar.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback> */}
          </Avatar>
        </div>
      );
    },
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
              console.log(
                `Opening folder: ${AvatarData.AvatarName}`
              );
            }}
          >
            <DeleteIcon fill="#1D3E80" height={23} width={23} />
          </Button>
        </div>
      );
    },
  },
];
