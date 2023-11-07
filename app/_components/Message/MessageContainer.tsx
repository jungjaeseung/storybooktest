import { User } from "@/app/_types/UserType";
import MessageContent from "./MessageContent";
import MessageInputBox from "./MessageInputBox";
import { Chat } from "@/app/_types/ChatType";
import { useEffect, useRef } from "react";

interface MessageContainerProps {
  userData: User;
  chatData: Chat[];
  roomName: string;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  userData: { name },
  chatData,
  roomName,
}) => {
  const chatContentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, []);
  return (
    <>
      <div className="border-b dark:border-gray-700 p-4">
        <h2 className="text-xl font-bold">{roomName}</h2>
      </div>
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4"
        ref={chatContentRef}
      >
        <MessageContent userData={{ name: name }} chatData={chatData} />
      </div>
      <MessageInputBox />
    </>
  );
};

export default MessageContainer;
