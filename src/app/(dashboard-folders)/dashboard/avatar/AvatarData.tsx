import React from "react";
import { AvatarDataProps, columns } from "./columns";
import { AvatarDataTable } from "./data-table";

async function getAvatarData(): Promise<AvatarDataProps[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      AvatarName: "Maurice",
      createDate: "2023-10-05T00:27:24.379Z",
      avatar: "/avatar1.webp",
    },
    {
      id: "0oshhh22",
      AvatarName: "Lucie",
      createDate: "2023-08-05T00:27:24.379Z",
      avatar: "/avatar2.webp",
    },
    {
      id: "668ed52f",
      AvatarName: "Lucas",
      createDate: "2023-09-05T00:27:24.379Z",
      avatar: "/avatar3.webp",
    },
    {
      id: "668ed52f",
      AvatarName: "Avatar Name",
      createDate: "2023-10-05T00:27:24.379Z",
      avatar: "/avatar1.webp",
    },
    {
      id: "668ed52f",
      AvatarName: "Avatar Name",
      createDate: "2023-10-05T00:27:24.379Z",
      avatar: "/avatar2.webp",
    },
    {
      id: "668ed52f",
      AvatarName: "Avatar Name",
      createDate: "2023-10-05T00:27:24.379Z",
      avatar: "/avatar3.webp",
    },
    {
      id: "668ed52f",
      AvatarName: "Avatar Name",
      createDate: "2023-10-05T00:27:24.379Z",
      avatar: "/avatar1.webp",
    },
    // ...
  ];
}

const AvatarsData = async () => {
  const data = await getAvatarData();
  return <AvatarDataTable columns={columns} data={data}/>;
};

export default AvatarsData;
