import { ContentDataProps } from "@/app/(dashboard-folders)/dashboard/content/columns";
import UserStore from "@/app/store/AuthStore";
import { useEffect, useRef, useState } from "react";

const useGetContentData = () => {
  const { token } = UserStore();
  const [data, setData] = useState<ContentDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const refetchRef = useRef<() => void>(() => {});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sorayia-backend.onrender.com/api/get_folders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // "Cache-Control": "no-cache",
              Authorization: `Token ${token}`,
            },
          }
        );
        const fetchedData = await response.json();
        setData([...fetchedData.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Set the refetch function
    refetchRef.current = () => {
      fetchData();
    };
  }, [token]);

  return { data, isLoading, refetch: refetchRef.current }; // Return the refetch function
};

export default useGetContentData;
