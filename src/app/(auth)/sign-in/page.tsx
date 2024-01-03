import LogoSorayia from "@/components/ui/Logo";
import SignInForm from "@/components/SignInpForm";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton";
import { GoogleIcon } from "@/components/icons/SvgIcons";

const SignIn = () => {
  return (
    <main>
      <div className="flex w-full min-h-screen">
        <div className="w-7/12 bg-white pl-28 pt-6">
          <div className="flex justify-start items-center">
            <Link href="/">
              <LogoSorayia LogoWidth={181} LogoHeight={49} />
            </Link>
          </div>
          <div className="mt-8">
            <div className="w-3/4">
              <div className="space-y-7">
                <h1 className="text-4xl-700 text-center text-primary">
                  Sign in to soyaria
                </h1>
                <ul className="flex gap-4 justify-center">
                  <li>
                    <GoogleSignInButton>
                      <GoogleIcon width={27} height={27} fill="#000000" />
                    </GoogleSignInButton>
                  </li>
                </ul>
                <span className="text-xl-500 text-black text-center block">
                  or use your email account :
                </span>
              </div>
              <div className="mt-5">
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 bg-primary flex justify-center items-center px-20">
          <div className="text-center space-y-8">
            <h2 className="uppercase text-4xl-700 text-white">
              Hello, Friend!
            </h2>
            <p className="text-2xl-400 text-white">
              Join our community by signing up on our website now, following a
              few simple steps.
            </p>
            <Link
              className={`${buttonVariants()} bg-transparent uppercase text-white border-2 border-white !rounded-[40px] text-2xl py-7 px-14 min-w-[255px]`}
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
