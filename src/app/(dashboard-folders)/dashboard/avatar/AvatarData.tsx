"use client";
import Spinner from "@/components/icons/Spinner";
import UserStore from "@/store/AuthStore";
import useAvatarDataStore from "@/store/AvatarDataStore";
import { useEffect } from "react";
import { columns } from "./columns";
import { AvatarDataTable } from "./data-table";

export const AvatarsData = () => {
  const { data, isLoading } = GetAvatarData();

  return (
    <>
      {isLoading ? (
        <div className="min-h-[444px] w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <AvatarDataTable columns={columns} data={data} />
      )}
    </>
  );
};

export const GetAvatarData = () => {
  const { token } = UserStore();
  const { isLoading, setIsLoading, avatarData, setAvatarData } =
    useAvatarDataStore();

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
        setAvatarData([...fetchedData]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [token, setIsLoading, setAvatarData]);

  return { data: avatarData, isLoading };
};
