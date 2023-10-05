import { SocialLinkBtn } from "@/components/ui/CustumsBtn";
import LogoSorayia from "@/components/ui/Logo";
import SignUpForm from "@/components/SignUpForm";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

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
                  <SocialLinkBtn
                    className="bg-white border border-gray-200 w-12 h-12"
                    href="#"
                  >
                    <svg
                      width={27}
                      height={27}
                      fill="#222222"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                    </svg>
                  </SocialLinkBtn>
                  <SocialLinkBtn
                    href="#"
                    className="bg-white border border-gray-200 w-12 h-12"
                  >
                    <svg
                      width={27}
                      height={27}
                      fill="#222222"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.94 5.001a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.481H3v12.52h4V8.481Zm6.32 0H9.34v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                    </svg>
                  </SocialLinkBtn>
                  <SocialLinkBtn
                    href="#"
                    className="bg-white border border-gray-200 w-12 h-12"
                  >
                    <svg
                      width={27}
                      height={27}
                      fill="#222222"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.278 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.601 4.601 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.998 9.998 0 0 1 3.064 7.51Z" />
                    </svg>
                  </SocialLinkBtn>
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
