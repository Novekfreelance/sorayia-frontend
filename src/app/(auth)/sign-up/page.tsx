import LogoSorayia from "@/components/ui/Logo";
import SignUpForm from "@/components/SignUpForm";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton";
import { GoogleIcon } from "@/components/icons/SvgIcons";

const SignUp = () => {
  return (
    <main>
      <div className="flex w-full min-h-screen">
        <div className="w-5/12 bg-primary flex justify-center items-center px-20">
          <div className="text-center space-y-8">
            <h2 className="uppercase text-4xl-700 text-white">Welcome back!</h2>
            <p className="text-2xl-400 text-white">
              To keep connected with us please login with your personnal info
            </p>
            <Link
              className={`${buttonVariants()} bg-transparent uppercase text-white border-2 border-white !rounded-[40px] text-2xl py-7 px-14 min-w-[255px]`}
              href="/sign-in"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="w-7/12 bg-white pr-28 pt-6">
          <div className="flex justify-end items-center">
            <Link href="/">
              <LogoSorayia LogoWidth={156} LogoHeight={35} />
            </Link>
          </div>
          <div className="flex justify-end items-center mt-8">
            <div className="w-3/4">
              <div className="space-y-7">
                <h1 className="text-4xl-700 text-center text-primary">
                  Create account
                </h1>
                <ul className="flex gap-4 justify-center">
                <li className="list-none">
                  <GoogleSignInButton>
                    <GoogleIcon width={27} height={27} fill="#000000"/>
                  </GoogleSignInButton>
                  </li>
                </ul>
                <span className="text-xl-500 text-black text-center block">
                  or use your email for registration :
                </span>
              </div>
              <div className="mt-5">
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
