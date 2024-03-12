"use client";

import DeleteFolderBtn from "@/components/dashboard/contentPage/DeleteFolderBtn";
import OpenFolderBtn from "@/components/dashboard/contentPage/OpenFolderBtn";
import { FolderIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type ContentDataProps = {
  id: string;
  name: string;
};

export const columns: ColumnDef<ContentDataProps>[] = [
  {
    accessorKey: "name",
    header: "Title",
    cell: ({ row }) => {
      const contentData = row.original;
      return (
        <div className="flex items-center justify-center gap-5">
          <FolderIcon fill="#999999" height={23} width={23} />
          <h3 className="text-xl-500 text-primary">{contentData.name}</h3>
        </div>
      );
    },
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
          <DeleteFolderBtn id={contentData.id} />
        </div>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const contentData = row.original;

      return <OpenFolderBtn FolderId={contentData.id} />;
    },
  },
];
