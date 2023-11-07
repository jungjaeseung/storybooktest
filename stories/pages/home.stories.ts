import type { Meta, StoryObj } from "@storybook/react";

import Home from "../../app/page";

const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
  tags: ["jjstest"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
  },
};
