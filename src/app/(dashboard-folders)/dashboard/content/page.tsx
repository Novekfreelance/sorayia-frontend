import AddNewFolderBtn from "@/components/dashboard/contentPage/AddNewFolderBtn"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import ContentData from "./FolderData"

const Content = () => {
	return (
		<div className="w-full h-full p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl-600 text-black">Content</h1>
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
      <div className="w-full text-end mt-4">
        <AddNewFolderBtn />
      </div>
      <div className="w-full pt-6">
        <div className="rounded border border-solid shadow border-shadowColor bg-white overflow-hidden">
          <ContentData />
        </div>
      </div>
    </div>
	)
}

export default Content