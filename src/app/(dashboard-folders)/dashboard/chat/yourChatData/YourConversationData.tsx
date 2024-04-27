"use client";
import Spinner from "@/components/icons/Spinner";
import UserStore from "@/store/AuthStore";
import useChatDataStore from "@/store/ChatDataStore";
import { useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const GetConversationData = () => {
  const { token } = UserStore();
  const { chatData, setChatData, isLoading, setIsLoading } = useChatDataStore();

  useEffect(() => {
    const fetchChatData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sorayia-backend.onrender.com/api/get_chats",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        const fetchedChatData = await response.json();
        setChatData([...fetchedChatData]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChatData();
  }, [token, setChatData, setIsLoading]);

  return { data: chatData, isLoading };
};

const YourConversationData = () => {
  const { data, isLoading } = GetConversationData();

  return (
    <div className="min-h-[444px] relative">
      {isLoading ? (
        <SpinnerOverlay />
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
};

const SpinnerOverlay = () => (
  <div className="w-full flex items-center justify-center absolute inset-x-0 inset-y-0">
    <Spinner />
  </div>
);

export default YourConversationData;
