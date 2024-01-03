import FolderTitle from "@/components/dashboard/contentPage/FolderTitle";
import { MoreIcon, FolderOpenIcon } from "@/components/icons/SvgIcons";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { ReactNode, FC } from "react";
import FilesData from "./FilesData";
// import { ContentFolderProps } from "./page";

type ContentRouteProps = {
  children: ReactNode;
};

const ContentRouteLayout: FC<ContentRouteProps> = ({
  children,
}) => {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl-600 text-black">Content</h1>
      </div>
      <div className="flex items-center justify-between mt-3 py-3 px-3 shadow rounded border-solid border border-shadowColor bg-white">
        <div className="flex items-center gap-2">
          <FolderOpenIcon width={25} height={25} fill="#999999" />
          <FolderTitle />
        </div>
        <MoreIcon width={20} height={20} fill="#999999" />
      </div>
      <div className="w-full min-h-[82%] mt-4 px-8 rounded border border-solid shadow border-shadowColor bg-white overflow-hidden">
        <div className="w-full text-center pt-4 space-y-2">
          <h2 className="text-2xl text-primary">Create Documents</h2>
          <p className="text-xl-400 text-black text-center">You can create a new document in this folder by writing, uploading an existing document or importing a webpage
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center min-h-[200px]">
          {children}
        </div>
        <div>
          <div className="w-full flex justify-between items-center mt-3">
            <div className="space-y-2">
              <h2 className="text-2xl text-primary">Stored Documents</h2>
              <p className="text-xl-400 text-black">
                These are all uploaded documents that cody can learn from
              </p>
            </div>
            <div>
              <div className="relative">
                <SearchIcon
                  className="absolute left-2 top-2/4 -translate-y-2/4 h-[38px]"
                  color="#999999"
                />
                <Input
                  placeholder="Search Folder..."
                  // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                  // onChange={(event) =>
                  //   table.getColumn("email")?.setFilterValue(event.target.value)
                  // }
                  className="max-w-[325px] border border-gray-300 py-2 pl-9 text-xl-500 text-gray-600"
                />
              </div>
            </div>
          </div>
          <div>
            <FilesData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRouteLayout;
