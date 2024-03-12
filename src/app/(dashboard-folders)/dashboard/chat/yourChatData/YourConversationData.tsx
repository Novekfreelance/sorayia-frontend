import { ConversationData, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<ConversationData[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "0oshhh22",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    {
      id: "668ed52f",
      ConversationName: "Conversation",
    },
    // ...
  ];
}

const YourConversationData = async () => {
  const data = await getData();
  return <DataTable columns={columns} data={data} />;
};

export default YourConversationData;
