/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SOZDEXyDLGH
 */

import ChatContainer from "./_components/Chat/ChatContainer";
import MessageContainer from "./_components/Message/MessageContainer";
import Sidebar from "./_components/Sidebar/Sidebar";
import { useState } from "react";

export default function Component() {
  const [location, setLocation] = useState("home");
  return (
    <div
      key="1"
      className="flex h-screen w-[800px] bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex hidden sm:flex">
        <Sidebar
          location={location}
          userData={{
            name: "",
            userImgUrl:
              "https://file.notion.so/f/s/729406a2-1942-4d7a-9756-09349a4956e5/20221028_144241.jpg?id=93bda494-9089-49f7-b58d-022494fcd6cf&table=block&spaceId=d6c39c9e-37fe-4e35-86e1-ce0d461dd990&expirationTimestamp=1699408800000&signature=SmY6s-4SVMf3mKRYVri7I9C0K6-eiYUgvhS2zlj5kEk&downloadName=20221028_144241.jpg",
          }}
          onIconClick={(location: string) => {
            setLocation(location);
          }}
        />
        <ChatContainer />
      </div>

      <div className="flex flex-col flex-1">
        <MessageContainer
          userData={{
            name: "jjs",
            userImgUrl:
              "https://file.notion.so/f/s/729406a2-1942-4d7a-9756-09349a4956e5/20221028_144241.jpg?id=93bda494-9089-49f7-b58d-022494fcd6cf&table=block&spaceId=d6c39c9e-37fe-4e35-86e1-ce0d461dd990&expirationTimestamp=1699408800000&signature=SmY6s-4SVMf3mKRYVri7I9C0K6-eiYUgvhS2zlj5kEk&downloadName=20221028_144241.jpg",
          }}
          chatData={[
            { send: "johndoe", message: "Hey, How's it going?" },
            {
              send: "johndoe",
              message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              send: "jjs",
              message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            { send: "jjs", message: "Your new message here." },
          ]}
          roomName="John Doe"
        />
      </div>
    </div>
  );
}
