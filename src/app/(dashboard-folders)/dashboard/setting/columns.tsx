"use client";
import { DeleteIcon, PencilIcon } from "@/components/icons/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type UserDataProps = {
  id: string;
	UserDatas: {
		avatar: string;
		username: string;
		email: string;
	}
	AccessLevel: string;
	UserSince: string;
};

export const columns: ColumnDef<UserDataProps>[] = [
	{
		accessorKey: "UserDatas",
		header: "User",
		cell: ({ row }) => {
			const UserDataProps = row.original;

			return (
        <div className="flex justify-start gap-2 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage
              className="rounded"
              src={UserDataProps.UserDatas.avatar}
              alt="avatar"
            />
            <AvatarFallback>
              {UserDataProps.UserDatas.username.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
					<div className="space-y-1">
						<p className="text-base text-gray-600">{UserDataProps.UserDatas.username}</p>
						<p className="text-base-400 text-gray-600">{UserDataProps.UserDatas.email}</p>
					</div>
        </div>
      );
		}
	},
	{
    accessorKey: "AccessLevel",
    header: "AccessLevel",
  },
	{
		accessorKey: "UserSince",
		header: "UserSince",
		cell: ({ row }) => {
			const date = new Date(row.getValue("UserSince"));
			const formatted = date.toLocaleDateString();
			return <div className="text-left font-medium">{formatted}</div>;
		},
	},
  {
    id: "operations",
    header: "Operations",
    cell: ({ row }) => {
      const UserDataProps = row.original;

      return (
        <div className="space-x-1">
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening conversation: ${UserDataProps.id}`);
            }}
          >
            <PencilIcon fill="#1D3E80" height={23} width={23} />
          </Button>
          <Button
            className="py-2 px-4 bg-transparent border-none hover:bg-accent"
            onClick={() => {
              console.log(`Opening conversation: ${UserDataProps.id}`);
            }}
          >
            <DeleteIcon fill="#1D3E80" height={23} width={23} />
          </Button>
        </div>
      );
    },
  },
];
