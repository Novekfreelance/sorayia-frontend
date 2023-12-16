"use client";

import OpenFolderBtn from "@/components/dashboard/contentPage/OpenFolderBtn";
import { DeleteIcon, FolderIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type ContentData = {
  id: string;
  ContentName: string;
};

export const columns: ColumnDef<ContentData>[] = [
  {
    accessorKey: "ContentName",
    header: "Title",
    cell: ({row}) => {
      const contentData= row.original;
      return (
        <div className="flex items-center justify-center gap-5">
          <FolderIcon fill="#999999" height={23} width={23} />
          <h3 className="text-xl-500 text-primary">
            {contentData.ContentName}
          </h3>
        </div>
      )
    }
  },
  {
    id: "operations",
    header: "Operations",
    cell: ({ row }) => {
      const contentData = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening folder: ${contentData.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(
                `Opening folder: ${contentData.ContentName}`
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
      const contentData = row.original;
      
      return (
        <OpenFolderBtn ChatId={contentData.id}/>
      );
    },
  },
];
