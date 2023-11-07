import type { Meta, StoryObj } from "@storybook/react";

import MessageInputBox from "../../app/_components/Message/MessageInputBox";

const meta = {
  title: "Boxs/MessageInputBox",
  component: MessageInputBox,
  parameters: {
    layout: "centered",
  },
  tags: ["chatApp"],
} satisfies Meta<typeof MessageInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
