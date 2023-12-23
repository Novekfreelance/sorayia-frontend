import { UploadIcon } from "@/components/icons/SvgIcons";
import { blockBoderStyle } from "@/app/(dashboard-folders)/dashboard/content/[id]/page";
import { usePathname, useRouter } from "next/navigation";

const UploadContentCard = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={`${blockBoderStyle} space-y-3 cursor-pointer hover:bg-accent`}
      onClick={() => {
        router.push(`${pathname}/upload`);
      }}
    >
      <UploadIcon width={45} height={45} fill="#999999" />
      <h3 className="text-2xl text-primary">Upload</h3>
      <p className="text-base-400 text-black">PDF Word or Powerpoint file</p>
    </div>
  );
};

export default UploadContentCard;
