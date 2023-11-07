import { Chat } from "@/app/_types/ChatType";
import React from "react";

interface MyMessageBoxProps {
  chat: Chat;
}

const MyMessageBox: React.FC<MyMessageBoxProps> = ({ chat: { message } }) => {
  return (
    <div className="flex justify-end items-end space-x-2">
      <div className="bg-gray-300 text-black rounded-lg px-6 py-2 max-w-xs">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MyMessageBox;
