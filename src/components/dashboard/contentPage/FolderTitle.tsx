import { FC } from "react"

type FolderTitleProps = {
	id: string;
}

const FolderTitle: FC<FolderTitleProps> = ({id}) => {
	return (
		<h3 className="text-xl-500 text-primary">Folder&nbsp;{id}</h3>
	)
}

export default FolderTitle