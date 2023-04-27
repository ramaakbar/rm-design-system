import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./textArea";

const meta = {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",

    disabled: false,
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};

export const DisabledInput: Story = {
  args: {
    disabled: true,
  },
};

export const ErrorInput: Story = {
  args: {
    error: "Input is required",
  },
};
