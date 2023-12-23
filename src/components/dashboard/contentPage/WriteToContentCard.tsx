import { PenIcon } from "@/components/icons/SvgIcons";
import { cn } from "@/lib/utils";
const WriteToContentCard = () => {
  return (
    <div className={cn(`p-5 shadow rounded border-solid border border-shadowColor space-y-3 cursor-not-allowed bg-gray-100`)}>
      <PenIcon width={45} height={45} fill="#00000099" />
      <h3 className="text-2xl text-gray-300">Write</h3>
      <p className="text-base-400 text-gray-300">
        Write or copy paste your document
      </p>
    </div>
  );
};

export default WriteToContentCard;
