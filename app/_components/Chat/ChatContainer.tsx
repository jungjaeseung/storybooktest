import { Chat, ChatInfo } from "@/app/_types/ChatType";
import ChatBox from "./ChatBox";

interface ChatProps {
  chatData: Chat[][];
  chatInfo: ChatInfo[];
}

const ChatContainer: React.FC<ChatProps> = ({ chatData, chatInfo }) => {
  const chatDataArr = chatData || [];

  return (
    <div className="w-80 border-r dark:border-gray-700 overflow-y-auto">
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">Chats</h2>
        <div className="space-y-1">
          {chatDataArr.length > 0 &&
            chatDataArr.map((chatData: Chat[], index: number) => (
              <ChatBox
                roomName={chatInfo[index].roomName}
                chatData={{
                  chats: chatData,
                  isReaden: chatInfo[index].isReaden,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
