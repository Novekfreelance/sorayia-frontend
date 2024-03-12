import { FilesDataProps, columns } from "./columns";
import { FilesDataTable } from "./data-table";

async function getFilesData(): Promise<FilesDataProps[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Agrosan",
      type: "Files",
      createDate: "2023-10-05T00:27:24.379Z",
    },
    {
      id: "0oshhh22",
      name: "Agrosan",
      type: "Files",
      createDate: "2022-10-05T00:27:24.379Z",
    },
    {
      id: "668ed52f",
      name: "Agrosan",
      type: "Files",
      createDate: "2021-11-05T00:27:24.379Z",
    },
    {
      id: "668ed52f",
      name: "Agrosan",
      type: "Files",
      createDate: "2024-10-04T00:27:24.379Z",
    },
    {
      id: "668ed524",
      name: "Agrosan",
      type: "Files",
      createDate: "2024-10-03T00:27:24.379Z",
    },
    {
      id: "668ed5222",
      name: "Agrosan",
      type: "Files",
      createDate: "2024-10-02T00:27:24.379Z",
    },
    {
      id: "668ed52f4f",
      name: "Agrosan",
      type: "Files",
      createDate: "2024-10-01T00:27:24.379Z",
    },
    {
      id: "668ed533f",
      name: "Agrosan",
      type: "Files",
      createDate: "2024-10-01T00:27:24.379Z",
    },
  ];
}

const FilesData = async () => {
  const data = await getFilesData();
  return <FilesDataTable columns={columns} data={data} />;
};

export default FilesData;
