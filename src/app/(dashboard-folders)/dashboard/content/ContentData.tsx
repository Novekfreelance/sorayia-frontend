import { ContentData, columns } from "./columns";
import { ContentDataTable } from "./data-table";

async function getContentData(): Promise<ContentData[]> {
  // Fetch data from your API here.
  return [
			{
				id: "728ed52f",
				ContentName: "Folder",
			},
			{
				id: "0oshhh22",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
			{
				id: "668ed52f",
				ContentName: "Folder",
			},
  ];
}


const ContentData = async () => {
  const data = await getContentData();
  return <ContentDataTable columns={columns} data={data} />;
};

export default ContentData;