"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useSettingIsActive() {
	const pathname = usePathname();
	const [isSettingActive, setIsSettingActive] = useState(false);

	useEffect(() => {
		setIsSettingActive(pathname.includes("/setting"));
	}, [pathname]);

	return isSettingActive;
}