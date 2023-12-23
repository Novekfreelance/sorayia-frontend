"use client"

import ImportWebLinkCard from "@/components/dashboard/contentPage/ImportWebLinkCard"
import UploadContentCard from "@/components/dashboard/contentPage/UploadContentCard"
import WriteToContentCard from "@/components/dashboard/contentPage/WriteToContentCard"
export const blockBoderStyle = "p-5 shadow rounded border-solid border border-shadowColor bg-white"


export const ContentFolferOption = () => {
	return (
      <div className="w-full grid grid-cols-3 gap-5 p-3">
				<WriteToContentCard />
				<UploadContentCard/>
				<ImportWebLinkCard />
			</div>
	)
}