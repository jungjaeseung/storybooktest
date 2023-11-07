import ChatRoom from "./ChatBox";

interface ChatProps {}

const ChatRoomBox: React.FC<ChatProps> = () => {
  return (
    <div className="w-80 border-r dark:border-gray-700 overflow-y-auto">
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">Chats</h2>
        <div className="space-y-1">
          <ChatRoom
            user={{ name: "John Doe" }}
            chatData={{
              chats: [
                { send: "johndoe", message: "Hey, How's it going?" },
                { send: "jjs", message: "Your new message here." },
              ],
              isReaden: true,
            }}
          />
          <ChatRoom
            user={{ name: "Jane Doe" }}
            chatData={{
              chats: [{ send: "janedoe", message: "Hey, How's it going?" }],
              isReaden: false,
            }}
          />
          <ChatRoom
            user={{
              name: "Writer Kim",
            }}
            chatData={{
              chats: [
                {
                  send: "writerkim",
                  message:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
              ],
              isReaden: false,
            }}
          />
          <ChatRoom
            user={{
              name: "Jaeseung Jung",
              userImgUrl:
                "https://phinf.pstatic.net/contact/20230731_288/1690761539665PWs9O_JPEG/image.jpg?type=s160",
            }}
            chatData={{
              chats: [{ send: "jungjaeseung", message: "안녕하세요." }],
              isReaden: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoomBox;
