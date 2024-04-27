"use client";
import Spinner from "@/components/icons/Spinner";
import UserStore from "@/store/AuthStore";
import { useEffect, useState } from "react";
import { ChooseBotDataTable } from "./choose-bot-data-table";
import { columns } from "./columns";

export const GetBotData = () => {
  const { token } = UserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [botData, setBotData] = useState([]);
  useEffect(() => {
    const fetchBotData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sorayia-backend.onrender.com/api/get_bots",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        const fetchedBotData = await response.json();
        setBotData(fetchedBotData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBotData();
  }, [token]);

  return { data: botData, isLoading };
};

const ChooseBotData = () => {
  const { data, isLoading } = GetBotData();
  return (
    <div className="min-h-[444px] relative">
      {isLoading ? (
        <div className="w-full flex items-center justify-center absolute left-2/4 -translate-x-2/4 top-2/4">
          <Spinner />
        </div>
      ) : (
        <ChooseBotDataTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default ChooseBotData;
