"use client";
import Link from "next/link";
import { FC } from "react";
import {
  BotIcon,
  ChatIcon,
  ContentIcon,
  QuestionIcon,
  SettingIcon,
  UserIcon,
} from "../icons/SvgIcons";
import { usePathname } from "next/navigation";
import SidebarUserInfo from "./profil/SidebarUserInfo";
import useSidebarStore from "@/app/store/SidebarStore";
import useSidebarWidthEffect from "@/hooks/useSidebarWidthEffect";
import useChatIsActive from "@/hooks/useChatLinkEffect";
import useContentIsActive from "@/hooks/useContentLinkEffect";
import useSettingIsActive from "@/hooks/useSettingLinkEffect";
import Image from "next/image";

type NavbarProps = {
  style: React.CSSProperties;
};

const routes = [
  {
    label: "Chat",
    icon: <ChatIcon fill="#ffffff" height={29} width={29} />,
    path: "/dashboard/chat",
  },
  {
    label: "Bot",
    icon: <BotIcon fill="#ffffff" height={29} width={29} />,
    path: "/dashboard/bot",
  },
  {
    label: "Content",
    icon: <ContentIcon fill="#ffffff" height={29} width={29} />,
    path: "/dashboard/content",
  },
  {
    label: "Avatar",
    icon: <UserIcon fill="#ffffff" height={29} width={29} />,
    path: "/dashboard/avatar",
  },
  {
    label: "Setting",
    icon: <SettingIcon fill="#ffffff" height={29} width={29} />,
    path: "/dashboard/setting",
  },
];

const Navbar: FC<NavbarProps> = ({ style }) => {
  useSidebarWidthEffect();
  const { sidebarWidth } = useSidebarStore();
  const isSidebarCollapsed = sidebarWidth < 100;
  const pathname = usePathname();
  const isChatActive = useChatIsActive();
  const isContentActive = useContentIsActive();
  const isSettingActive = useSettingIsActive();
  return (
    <header
      className="h-full-dvh flex flex-col justify-between pb-8 bg-primary z-80 pt-5 overflow-hidden"
      style={style}
    >
      <nav>
        {isSidebarCollapsed ? (
          <Image
            src="/sorayia-logo.webp"
            alt=""
            className="ml-[6px]"
            width={80}
            height={81}
          />
        ) : (
          <span className="text-4xl-700 text-white block pl-8">Sorayia</span>
        )}
        <ul className="flex flex-col mt-5">
          {routes.map((route) => {
            const fullPath = route.path;
            const navLinkActiveStyle =
              "bg-primary-foreground before:absolute before:-translate-x-8 before:w-1 before:bg-white before:h-full before:z-[2]";
            const isActive = pathname === fullPath;
            const linkClasses = `text-white text-2xl-500 pl-8 leading-[60px] h-14 flex gap-2 items-center ${
              isActive ? navLinkActiveStyle : "hover:bg-primary-foreground"
            }`;
            return (
              <li key={fullPath} className="relative">
                {route.path === "/dashboard/chat" ||
                route.path === "/dashboard/content" ||
                route.path === "/dashboard/setting" ? (
                  <Link
                    href={fullPath}
                    className={`
                    ${linkClasses}
                    ${
                      isChatActive && route.path === "/dashboard/chat"
                        ? navLinkActiveStyle
                        : ""
                    }
                    ${
                      isContentActive && route.path === "/dashboard/content"
                        ? navLinkActiveStyle
                        : ""
                    }
                    ${
                      isSettingActive && route.path === "/dashboard/setting"
                        ? navLinkActiveStyle
                        : ""
                    }
                    `}
                  >
                    {isSidebarCollapsed ? (
                      <span>{route.icon}</span>
                    ) : (
                      <>
                        <span>{route.icon}</span>
                        {route.label}
                      </>
                    )}
                  </Link>
                ) : (
                  <Link href={fullPath} className={linkClasses}>
                    {isSidebarCollapsed ? (
                      <span>{route.icon}</span>
                    ) : (
                      <>
                        <span>{route.icon}</span>
                        {route.label}
                      </>
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col gap-3 justify-start items-start">
        {isSidebarCollapsed ? (
          <span className="pl-10">
            <QuestionIcon fill="#ffffff" width={19} height={19} />
          </span>
        ) : (
          <span className="pl-7 flex items-center text-white gap-2">
            <QuestionIcon fill="#ffffff" width={19} height={19} /> Get help
          </span>
        )}
        <SidebarUserInfo />
      </div>
    </header>
  );
};

export default Navbar;
