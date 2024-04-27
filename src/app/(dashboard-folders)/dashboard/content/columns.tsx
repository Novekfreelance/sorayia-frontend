"use client";

import DeleteFolderBtn from "@/components/dashboard/contentPage/DeleteFolderBtn";
import EditFolderBtn from "@/components/dashboard/contentPage/EditFolderBtn";
import OpenFolderBtn from "@/components/dashboard/contentPage/OpenFolderBtn";
import { FolderIcon } from "@/components/icons/SvgIcons";
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
        <div className="flex items-center justify-start gap-5 ml-14 line-clamp-2">
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
          <EditFolderBtn id={contentData.id} />
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
