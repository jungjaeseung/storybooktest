import { useRef, useState } from "react";
import { AiOutlinePlusCircle as Plus } from "react-icons/ai";
import { BsMicFill as Mic } from "react-icons/bs";
import { BsFillSendFill as Send } from "react-icons/bs";

interface MessageInputBoxProps {}

const MessageInputBox: React.FC<MessageInputBoxProps> = ({}) => {
  const [textAreaState, setTextAreaState] = useState<string>("");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaState(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 4 + "px";
    }
  };

  return (
    <div className="border-t dark:border-gray-700 p-4 flex items-end space-x-2">
      <div className="flex w-[22px] h-[38px] justify-center items-center">
        <Plus size={22} />
      </div>
      <textarea
        className="flex min-h-[20px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background resize-none  placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 flex-1"
        placeholder="Type a message"
        rows={1}
        value={textAreaState}
        ref={textAreaRef}
        onChange={(e) => onTextAreaChange(e)}
      />
      <div className="flex h-[38px] justify-center items-center">
        <div className="mr-3 ml-1">
          <Mic size={22} />
        </div>
        <div>
          <Send size={22} />
        </div>
      </div>
    </div>
  );
};

export default MessageInputBox;
