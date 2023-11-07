import Image from "next/image";
import UserPlaceholder from "../../../public/user-circle.svg";
import { Chat } from "@/app/_types/ChatType";

interface ChatRoomProps {
  roomName: string;
  userImgUrl?: string;
  chatData: {
    chats: Chat[];
    isReaden: boolean;
  };
}

const ChatBox: React.FC<ChatRoomProps> = ({
  roomName,
  userImgUrl,
  chatData: { chats, isReaden },
}) => {
  const userPhoto = userImgUrl || UserPlaceholder;
  const lastChat = chats.length > 0 ? chats[chats.length - 1].message : "";

  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
      <div className="relative">
        <Image
          src={userPhoto}
          width={40}
          height={40}
          className="rounded-full fill-gray-400"
          alt="User avatar"
        />
        <div
          className={`absolute w-2 h-2 bg-sky-400 rounded-full -top-1 -left-1
          ${isReaden ? "hidden" : "block"} `}
        ></div>
      </div>
      <div className="ml-2 flex flex-col items-start justify-center">
        <div>
          <h3 className="font-semibold">{roomName}</h3>
        </div>
        <div className="h-[20px]">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[14rem] whitespace-nowrap text-ellipsis overflow-hidden">
            {lastChat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
