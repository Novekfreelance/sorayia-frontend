import LogoSorayia from "@/components/ui/Logo";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

const ForgotPassword = () => {
  return (
    <main>
      <MaxWidthWrapper className="h-full-dvh">
        <div className="flex items-center justify-start pt-10">
          <Link href="/">
            <LogoSorayia LogoWidth={156} LogoHeight={35} />
          </Link>
        </div>
        <div className="relative w-full h-5/6">
          <div className="w-[500px] mt-10 absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="space-y-7 mb-12">
              <h1 className="text-4xl-700 text-primary text-center">
                Forgot your Password
              </h1>
              <p className="text-xl-500 text-black text-center">Enter your email account : </p>
            </div>
            <ForgotPasswordForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default ForgotPassword;
