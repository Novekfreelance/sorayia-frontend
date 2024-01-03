import { FC } from "react";

export type FilesRouteProps = {
	params: {
    FolderId: string;
  };
}

const FilesCatchAllRoute: FC <FilesRouteProps> = ({params: { FolderId }}) => {
	return (
		<div>
			<div><h2>File {FolderId}</h2></div>
		</div>
	)
}

export default FilesCatchAllRoute