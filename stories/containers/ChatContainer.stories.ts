import type { Meta, StoryObj } from "@storybook/react";

import ChatContainer from "../../app/_components/Chat/ChatContainer";

const meta = {
  title: "Containers/ChatContainer",
  component: ChatContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["chatApp"],
} satisfies Meta<typeof ChatContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
