import { BotDataProps, columns } from "./columns";
import { DataTable } from "./data-table";

async function getBotData(): Promise<BotDataProps[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "0oshhh22",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "668ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "668ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "668ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "668ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    {
      id: "668ed52f",
      name: "Conversation",
      description: "Description",
      createDate: "2023-10-05T00:27:24.379Z",
      model: "OpenAI GPT4",
      avatar: "avatar",
    },
    // ...
  ];
}

const BotsData = async () => {
  const data = await getBotData();
  return <DataTable columns={columns} data={data} />;
};

export default BotsData;
