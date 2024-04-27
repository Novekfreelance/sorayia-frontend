"use client";

import { ContentDataProps } from "@/app/(dashboard-folders)/dashboard/content/columns";
import { Checkbox } from "@/components/ui/checkbox";
import UseProcessContext from "@/store/CreateBotStore";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ContentDataProps>[] = [
  {
    id: "select",
    cell: ({ row }) => {
      const { setFolders } = UseProcessContext();
      const FolderData = row.original;
      const handleChange = (value: boolean) => {
        row.toggleSelected(!!value);
        setFolders(FolderData);
      };
      return (
        <Checkbox
          className="h-6 w-6 border-none bg-gray-100 data-[state=checked]:bg-gray-100 data-[state=checked]:text-primary"
          checked={row.getIsSelected()}
          onCheckedChange={handleChange}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Title",
  },
];
