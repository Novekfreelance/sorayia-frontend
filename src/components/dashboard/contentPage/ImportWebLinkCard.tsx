import { LinkIcon } from "@/components/icons/SvgIcons";
import { cn } from "@/lib/utils";

const ImportWebLinkCard = () => {
  return (
    <div className={cn(`p-5 shadow rounded border-solid border border-shadowColor space-y-3 cursor-not-allowed bg-gray-100`)}>
      <LinkIcon width={45} height={45} fill="#00000099" />
      <h3 className="text-2xl text-gray-300">Import</h3>
      <p className="text-base-400 text-gray-300">Webpage with text content</p>
    </div>
  );
};

export default ImportWebLinkCard;
