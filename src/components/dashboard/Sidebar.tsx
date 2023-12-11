import useSidebarStore from "@/app/store/SidebarStore";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { sidebarWidth } = useSidebarStore();
  return (
    <div className="flex flex-col justify-between transition-all">
      <Navbar style={{ width: `${sidebarWidth}px` }} />
    </div>
  );
};

export default Sidebar;
