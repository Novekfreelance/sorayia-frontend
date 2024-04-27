import CopyInviteLinkBtn from "@/components/dashboard/settingPage/IvinteUserBtn";
import { UserAddIcon } from "@/components/icons/SvgIcons";
import { Button } from "@/components/ui/button";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const InviteLinkUrl =
    "https://sorayia/invite-link/99705fc2-5ac8-4ee4-bf91-ce9c6d7277e0";
  return (
    <div>
      <div className="flex flex-col justify-center items-start space-y-2 mb-2">
        <h2 className="text-2xl-600 text-primary">Invite Link</h2>
        <p className="text-xl-400 text-black">
          Share this secret link to invite people to this team. Only users who
          are owners can see this.
        </p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 w-full rounded">
        <p className="bg-transparent pl-4">{InviteLinkUrl}</p>
        <CopyInviteLinkBtn linkUrl={InviteLinkUrl} />
      </div>
      <p className="text-xl-500 pt-2">
        Click <span className="text-primary">here</span> to reset this link
      </p>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="text-2xl-600 text-primary">Users</h2>
            <p className="text-xl-400 text-black">
              These are all users and hers informations
            </p>
          </div>
          <Button className="bg-primary">
            <UserAddIcon width={33} height={33} fill="#ffffff" />
            <span className="text-xl-500 text-white">Invite</span>
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default UsersPage;
