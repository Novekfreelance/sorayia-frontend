"use client";
import Spinner from "@/components/icons/Spinner";
import useGetContentData from "@/hooks/useContentData";
import { columns } from "./columns";
import { ContentDataTable } from "./data-table";

const ContentData = () => {
  const { data, isLoading } = useGetContentData();
  return (
    <div className="min-h-[444px] relative">
      {isLoading ? (
        <div className="w-full flex items-center justify-center absolute left-2/4 -translate-x-2/4 top-2/4">
          <Spinner />
        </div>
      ) : (
        <ContentDataTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default ContentData;
