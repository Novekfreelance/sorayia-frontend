"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import CreateChatProcess from "@/store/CreateChatStore";
import { ColumnDef } from "@tanstack/react-table";

export type BotDataProps = {
  id: string;
  avatar: {
    url: string;
  };
  name: string;
  description: string;
  model: string;
};

export const columns: ColumnDef<BotDataProps>[] = [
  {
    id: "select",
    cell: ({ row }) => {
      const { setBotId } = CreateChatProcess();
      const FolderData = row.original;
      const handleChange = (value: boolean) => {
        row.toggleSelected(!!value);
        setBotId(FolderData);
        console.log(FolderData.id);
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
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const BotData = row.original;

      return (
        <div className="flex justify-center">
          <Avatar className="h-16 w-16">
            <AvatarImage
              className="rounded"
              src={BotData.avatar?.url}
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
];
