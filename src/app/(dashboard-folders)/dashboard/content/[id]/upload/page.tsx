"use client";
import UploadForm from "@/components/dashboard/uploadPage/UploadForm";
import { ContentFolderProps } from "../page";

const UploadPage = ({ params }: ContentFolderProps) => {
  return <UploadForm id={params.id} />;
};

export default UploadPage;
