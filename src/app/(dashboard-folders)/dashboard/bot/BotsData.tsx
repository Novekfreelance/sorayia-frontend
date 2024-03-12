"use client";
import UserStore from "@/app/store/AuthStore";
import Spinner from "@/components/icons/Spinner";
import { useEffect, useState } from "react";
import { BotDataProps, columns } from "./columns";
import { DataTable } from "./data-table";

export const GetBotData = () => {
  const { token } = UserStore();
  const [data, setData] = useState<BotDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setData(fetchedBotData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBotData();
  }, [token]);

  return { data, isLoading };
};

const BotsData = () => {
  const { data, isLoading } = GetBotData();
  return (
    <div className="min-h-[444px] relative">
      {isLoading && (
        <div className="w-full flex items-center justify-center absolute left-2/4 -translate-x-2/4 top-2/4">
          <Spinner />
        </div>
      )}
      {data.length > 0 && <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default BotsData;
