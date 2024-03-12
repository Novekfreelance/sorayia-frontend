"use client";
import Spinner from "@/components/icons/Spinner";
import useGetContentData from "@/hooks/useContentData";
import { columns } from "./columns";
import { ContentDataTable } from "./data-table";

const ContentData = () => {
  const { data, isLoading } = useGetContentData();
  return (
    <>
      {isLoading && (
        <div className="min-h-[444px] w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {data.length > 0 && <ContentDataTable columns={columns} data={data} />}
    </>
  );
};

export default ContentData;
