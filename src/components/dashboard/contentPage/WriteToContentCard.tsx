import { PenIcon } from "@/components/icons/SvgIcons";
import { blockBoderStyle } from "@/app/(dashboard-folders)/dashboard/content/[id]/page";
import { cn } from "@/lib/utils";
const WriteToContentCard = () => {
  return (
    <div className={cn(`${blockBoderStyle} space-y-3 cursor-not-allowed bg-gray-100`)}>
      <PenIcon width={45} height={45} fill="#00000099" />
      <h3 className="text-2xl text-gray-300">Write</h3>
      <p className="text-base-400 text-gray-300">
        Write or copy paste your document
      </p>
    </div>
  );
};

export default WriteToContentCard;
