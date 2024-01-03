import { ReactNode, FC } from "react";

type DashboardFoldersLayoutProps = {
  children: ReactNode;
};

const DashboardFolderLayout: FC<DashboardFoldersLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default DashboardFolderLayout;
