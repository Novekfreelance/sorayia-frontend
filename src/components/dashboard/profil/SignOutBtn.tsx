import { LogOutIcon } from "@/components/icons/SvgIcons";
import Link from "next/link";

const SignOutBtn = () => {
	return (
		<Link className="underline underline-offset-2 text-2xl-600 text-white flex gap-2" href="#">Sign Out <LogOutIcon width={30} height={30} fill="#ffffff" /></Link>
	)
}

export default SignOutBtn