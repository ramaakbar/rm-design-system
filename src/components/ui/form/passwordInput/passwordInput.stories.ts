import type { Meta, StoryObj } from "@storybook/react";
import { Lock } from "lucide-react";

import { PasswordInput } from "./passwordInput";

const meta = {
  title: "UI/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",

    disabled: false,
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};

export const InputWithIcon: Story = {
  args: {
    startNode: Lock,
  },
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
