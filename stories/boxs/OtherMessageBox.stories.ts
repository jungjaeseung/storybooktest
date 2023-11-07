import type { Meta, StoryObj } from "@storybook/react";

import OtherMessageBox from "../../app/_components/Message/OtherMessageBox";

const meta = {
  title: "Boxs/OtherMessageBox",
  component: OtherMessageBox,
  parameters: {
    layout: "centered",
  },
  tags: ["chatApp"],
} satisfies Meta<typeof OtherMessageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chat: { send: "", message: "my message" },
  },
};

export const LongMessage: Story = {
  args: {
    chat: {
      send: Default.args.chat.send,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
};
