"use client";
import ProfilInformations from "@/components/dashboard/profil/ProfilInformations";
import UserInfosCard from "@/components/dashboard/profil/UserInfosCard";

const UserProfil = () => {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl-600 text-black">Profil</h1>
      </div>
      <div className="w-full pt-6">
        <div className="shadow rounded border-shadowBoderColor bg-white overflow-hidden">
          <UserInfosCard />
          <div className="p-6">
            <ProfilInformations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfil;
