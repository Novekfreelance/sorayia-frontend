"use client";
import UserStore from "@/app/store/AuthStore";
import Spinner from "@/components/icons/Spinner";
import { useEffect, useState } from "react";
import { AvatarDataProps, columns } from "./columns";
import { AvatarDataTable } from "./data-table";

export const AvatarsData = () => {
  const { data, isLoading } = GetAvatarData();

  return (
    <>
      {isLoading && (
        <div className="min-h-[444px] w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {data.length > 0 && <AvatarDataTable columns={columns} data={data} />}
    </>
  );
};

export const GetAvatarData = () => {
  const { token } = UserStore();
  const [data, setData] = useState<AvatarDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sorayia-backend.onrender.com/api/get_avatars",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [token]);

  return { data, isLoading };
};
