"use client";
import OpenFilesBtn from "@/components/dashboard/contentPage/OpenFilesBtn";
import { DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type FilesDataProps = {
  id: string;
  name: string;
  type: string;
  createDate: string;
};

export const columns: ColumnDef<FilesDataProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
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
      const FilesData = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening conversation: ${FilesData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening conversation: ${FilesData.id}`);
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
      const FilesData = row.original;
      
      return (
        <OpenFilesBtn FilesId={FilesData.id}/>
      );
    },
  },
];
