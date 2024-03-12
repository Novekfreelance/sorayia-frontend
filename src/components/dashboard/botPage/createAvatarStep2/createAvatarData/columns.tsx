"use client";
import { AvatarDataProps } from "@/app/(dashboard-folders)/dashboard/avatar/columns";
import UseProcessContext from "@/app/store/CreateBotStore";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<AvatarDataProps>[] = [
  {
    accessorKey: "name",
    header: "Avatar",
    cell: ({ row }) => {
      const { setAvatar } = UseProcessContext();
      const AvatarData = row.original;
      const handleClick = () => {
        if (row.getToggleSelectedHandler()) {
          setAvatar(AvatarData);
          console.log(AvatarData);
        }
      };
      return (
        <div
          className={`flex flex-col justify-center items-center rounded w-full min-h-[200px] cursor-pointer`}
          onClick={handleClick}
        >
          <Image width={160} height={160} src={AvatarData.url} alt="avatar" />
          <p>{AvatarData.name}</p>
        </div>
      );
    },
  },
];
