import type { Meta, StoryObj } from "@storybook/react";

import ChatBox from "../../app/_components/Chat/ChatBox";

const meta = {
  title: "Boxs/ChatBox",
  component: ChatBox,
  parameters: {
    layout: "centered",
  },
  tags: ["chatApp"],
} satisfies Meta<typeof ChatBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roomName: "Jane Doe",
    userImgUrl: "",
    chatData: {
      chats: [],
      isReaden: true,
    },
  },
};

export const DefaultWithChat: Story = {
  args: {
    roomName: Default.args.roomName,
    chatData: {
      chats: [{ send: "someone", message: "Hey, How's it going?" }],
      isReaden: false,
    },
  },
};

export const Profile: Story = {
  args: {
    roomName: Default.args.roomName,
    userImgUrl:
      "https://phinf.pstatic.net/contact/20230731_288/1690761539665PWs9O_JPEG/image.jpg?type=s160",
    chatData: { chats: [], isReaden: true },
  },
};

export const ProfileWithChat: Story = {
  args: {
    roomName: Default.args.roomName,
    userImgUrl: Profile.args.userImgUrl,
    chatData: { ...DefaultWithChat.args.chatData },
  },
};

export const DefaultWithLongChat: Story = {
  args: {
    roomName: Default.args.roomName,
    userImgUrl: Default.args.userImgUrl,
    chatData: {
      chats: [
        {
          send: "someone",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
      isReaden: false,
    },
  },
};
