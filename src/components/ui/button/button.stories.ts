import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};
export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};
export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};
