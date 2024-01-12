import { UploadIcon } from "@/components/icons/SvgIcons";
import { useRouter } from "next/navigation";
import { FC } from "react";

type UploadContentCardProps = {
  id: string;
};

const UploadContentCard: FC<UploadContentCardProps> = ( { id }) => {
  const router = useRouter();
  return (
    <div
      className={`p-5 shadow rounded border-solid border border-shadowColor bg-white space-y-3 cursor-pointer hover:bg-accent`}
      onClick={() => {
        router.push(`/dashboard/content/${id}/upload`);
      }}
    >
      <UploadIcon width={45} height={45} fill="#999999" />
      <h3 className="text-2xl text-primary">Upload</h3>
      <p className="text-base-400 text-black">Upload txt, pdf, or word</p>
    </div>
  );
};

export default UploadContentCard;
