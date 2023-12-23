"use client";

import ImportWebLinkCard from "@/components/dashboard/contentPage/ImportWebLinkCard";
import UploadContentCard from "@/components/dashboard/contentPage/UploadContentCard";
import WriteToContentCard from "@/components/dashboard/contentPage/WriteToContentCard";
import { FC } from "react";
import {ContentRouteProps} from "@/app/(dashboard-folders)/dashboard/content/[id]/layout";

export const ContentFolferOption: FC<ContentRouteProps> = ({params: { id }}) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 p-3">
      <WriteToContentCard />
      <UploadContentCard id={id} />
      <ImportWebLinkCard />
    </div>
  );
};

export default ContentFolferOption;
