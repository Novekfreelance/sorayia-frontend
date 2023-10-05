import ResetPasswordForm from "@/components/ResetPasswordForm";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <main>
      <MaxWidthWrapper className="h-full-dvh">
        <div className="flex items-center justify-start pt-10">
          <Link href="../forgot-password" className="flex items-center gap-3">
            <span>
              <svg
                width={25}
                height={25}
                fill="none"
                stroke="#1d3e81"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.9 12h18" />
                <path d="m8.9 18-6-6 6-6" />
              </svg>
            </span>
            Back
          </Link>
        </div>
        <div className="relative w-full h-5/6">
          <div className="w-[500px] mt-10 absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
            <h1 className="text-4xl-700 text-primary text-center mb-14">Reset your Password</h1>
            <ResetPasswordForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default ResetPassword;
