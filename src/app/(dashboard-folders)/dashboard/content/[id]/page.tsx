"use client";

import ImportWebLinkCard from "@/components/dashboard/contentPage/ImportWebLinkCard";
import UploadContentCard from "@/components/dashboard/contentPage/UploadContentCard";
import WriteToContentCard from "@/components/dashboard/contentPage/WriteToContentCard";
import { FC } from "react";

export type ContentFolderProps = {
  params: {
    id: string;
  };
}

export const ContentFolferOption: FC<ContentFolderProps> = ({params: { id }}) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 p-3">
      <WriteToContentCard />
      <UploadContentCard id={id} />
      <ImportWebLinkCard />
    </div>
  );
};

export default ContentFolferOption;
