import React from "react";

import Image from "next/image";

import UserPlaceholder from "../../../public/user-circle.svg";
import { Chat } from "@/app/_types/ChatType";

interface OtherMessageBoxProps {
  chat: Chat;
}

const OtherMessageBox: React.FC<OtherMessageBoxProps> = ({
  chat: { send, message },
}) => {
  return (
    <div className="flex items-start space-x-2">
      <Image
        src={UserPlaceholder}
        width={40}
        height={40}
        className="rounded-full"
        alt="User avatar"
      />
      <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-[16rem]">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default OtherMessageBox;
