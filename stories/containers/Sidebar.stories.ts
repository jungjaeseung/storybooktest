import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "../../app/_components/Sidebar/Sidebar";

const meta = {
  title: "Containers/Sidebar",
  component: Sidebar,
  argTypes: {
    location: {
      options: ["", "home", "chat", "setting"],
      control: { type: "radio" },
    },
    onIconClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["chatApp"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    location: "",
    userData: {},
  },
};

export const Chat: Story = {
  args: {
    location: "chat",
    userData: {},
  },
};

export const Setting: Story = {
  args: {
    location: "setting",
    userData: {},
  },
};

export const HomeWithUserProfile: Story = {
  args: {
    location: Home.args.location,
    userData: {
      userImgUrl:
        "https://file.notion.so/f/s/729406a2-1942-4d7a-9756-09349a4956e5/20221028_144241.jpg?id=93bda494-9089-49f7-b58d-022494fcd6cf&table=block&spaceId=d6c39c9e-37fe-4e35-86e1-ce0d461dd990&expirationTimestamp=1699408800000&signature=SmY6s-4SVMf3mKRYVri7I9C0K6-eiYUgvhS2zlj5kEk&downloadName=20221028_144241.jpg",
    },
  },
};
