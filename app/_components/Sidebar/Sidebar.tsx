import Image from "next/image";

import UserPlaceholder from "../../../public/user-circle.svg";

import { AiFillHome as HomeIn } from "react-icons/ai";
import { AiOutlineHome as HomeOut } from "react-icons/ai";
import { BsChatFill as ChatIn } from "react-icons/bs";
import { BsChat as ChatOut } from "react-icons/bs";
import { IoSettingsOutline as SettingOut } from "react-icons/io5";
import { IoSettingsSharp as SettingIn } from "react-icons/io5";
import { UserSidebar } from "@/app/_types/UserType";

interface SidebarProps {
  location: string;
  userData: UserSidebar;
  onIconClick: (location: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  location,
  userData: { userImgUrl },
  onIconClick,
}) => {
  const imgSrc = userImgUrl ? userImgUrl : UserPlaceholder;

  const IconSet = (size: number) => {
    switch (location) {
      case "chat":
        return (
          <>
            <HomeOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("home")}
            />
            <ChatIn size={size} />
            <SettingOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("setting")}
            />
          </>
        );
      case "setting":
        return (
          <>
            <HomeOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("home")}
            />
            <ChatOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("chat")}
            />
            <SettingIn size={size} />
          </>
        );
      case "home":
      default:
        return (
          <>
            <HomeIn size={size} id="home" />
            <ChatOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("chat")}
            />
            <SettingOut
              size={size}
              className="cursor-pointer"
              onClick={() => onIconClick("setting")}
            />
          </>
        );
    }
  };

  return (
    <div className="w-16 border-r bg-slate-100 dark:border-gray-700 overflow-y-auto h-screen">
      <div className="pb-2 space-y-2 flex flex-col justify-between h-full items-center">
        <div className="mt-12 h-1/5 flex flex-col justify-between">
          {IconSet(26)}
        </div>
        <Image
          src={imgSrc}
          width={40}
          height={40}
          className="rounded-full"
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
