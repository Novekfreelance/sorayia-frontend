import AddNewYourConversationBtn from "@/components/dashboard/chatPage/AddNewYourConversationBtn";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "lucide-react";
import GuestConversationData from "./guestChatData/GuestConversationData";
import YourConversationData from "./yourChatData/YourConversationData";

const Chat = () => {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl-600 text-black">Conversations</h1>
        <div className="relative">
          <SearchIcon
            className="absolute left-2 top-2/4 -translate-y-2/4 h-[38px]"
            color="#999999"
          />
          <Input
            placeholder="Search conversation..."
            // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            // onChange={(event) =>
            //   table.getColumn("email")?.setFilterValue(event.target.value)
            // }
            className="max-w-[325px] border border-gray-300 py-2 pl-9 text-xl-500 text-gray-600"
          />
        </div>
      </div>
      <Tabs
        defaultValue="Yours-Conversation"
        className="w-full h-[90%] flex flex-col"
      >
        <div className="w-full flex justify-between items-center mt-4">
          <TabsList className="w-52 space-x-5 bg-white rounded border border-solid shadow border-shadowColor">
            <TabsTrigger
              className="data-[state=active]:bg-transparent"
              value="Yours-Conversation"
            >
              Yours
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent"
              value="Guest-Conversation"
              disabled
            >
              Guest
            </TabsTrigger>
          </TabsList>
          <AddNewYourConversationBtn />
        </div>
        <div className="pt-6">
          <TabsContent
            className="rounded border border-solid shadow border-shadowColor bg-white overflow-hidden"
            value="Yours-Conversation"
          >
            <YourConversationData />
          </TabsContent>
          <TabsContent
            className="rounded border border-solid shadow border-shadowColor bg-white overflow-hidden"
            value="Guest-Conversation"
          >
            <GuestConversationData />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Chat;
