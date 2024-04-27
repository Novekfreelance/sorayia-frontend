import UserStore from "@/store/AuthStore";
import useContentDataStore from "@/store/ContentDataStore";
import { useEffect } from "react";

const useGetContentData = () => {
  const { token } = UserStore();
  const { data, setData, isLoading, setIsLoading } = useContentDataStore();

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
  }, [token, setData, setIsLoading]);

  return { data, isLoading };
};

export default useGetContentData;
