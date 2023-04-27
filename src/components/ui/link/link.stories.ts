import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";

const meta = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subtle: Story = {
  args: {
    children: "Button",
    href: "www.google.com",
    variant: "subtle",
  },
};

export const Underline: Story = {
  args: {
    children: "Button",
    href: "www.google.com",
    variant: "underline",
  },
};
