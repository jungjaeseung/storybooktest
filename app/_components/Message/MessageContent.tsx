import { Chat } from "@/app/_types/ChatType";
import { User } from "@/app/_types/UserType";
import OtherMessageBox from "./OtherMessageBox";
import MyMessageBox from "./MyMessageBox";

interface MessageContentProps {
  userData: User;
  chatData: Chat[];
}

const MessageContent: React.FC<MessageContentProps> = ({
  userData: { name },
  chatData,
}) => {
  return (
    <>
      {chatData.map((chat: Chat, index: number) => {
        return chat.send === name ? (
          <MyMessageBox chat={chat} key={index} />
        ) : (
          <OtherMessageBox chat={chat} key={index} />
        );
      })}
    </>
  );
};

export default MessageContent;
