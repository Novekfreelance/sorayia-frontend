import Link from "next/link";

const ProfilInformations = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div>
        <h2 className="text-primary text-xl-600 mb-3">Profil information :</h2>
        <p className="text-xl-500 text-black">
          Click&nbsp;<Link className="text-xl-600 text-primary" href="#">here</Link>&nbsp;to change user profile picture
        </p>
      </div>
      <div>
        <h2 className="text-primary text-xl-600 mb-3">Account Details :</h2>
        <div className="flex gap-3 mb-2">
          <p className="text-xl-500 text-black">
            Information about the user&apos;s current subscription plan :
          </p>
          <span className="text-primary text-xl-400">Basic</span>
        </div>
        <ul>
          <ol>
            <ul className="flex items-center gap-8">
              <ol className="text-xl-500 text-black mb-2">Start date :</ol>
              <ol className="text-base text-black">12-07-2023</ol>
            </ul>
          </ol>
          <ol>
            <ul className="flex items-center gap-8">
              <ol className="text-xl-500 text-black mb-2">Renewal date :</ol>
              <ol className="text-base text-black">12-08-2023</ol>
            </ul>
          </ol>
        </ul>
      </div>
      <div>
        <h2 className="text-primary text-xl-600 mb-3">Security Settings :</h2>
        <ul>
          <ol>
            <ul className="flex items-center gap-8 space-y-2">
              <ol className="text-xl-500 text-black">Password :</ol>
              <ol className="text-xl-400 text-black">********</ol>
            </ul>
          </ol>
        </ul>
        <p className="text-xl-500 text-black mt-1">
          Click&nbsp;<Link className="text-xl-600 text-primary" href="#">here</Link>&nbsp;to change password
        </p>
      </div>
    </div>
  );
};

export default ProfilInformations;
