import type { Meta, StoryObj } from "@storybook/react";
import { Check, Mail } from "lucide-react";

import { TextInput } from "./textInput";

const meta = {
  title: "UI/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",

    disabled: false,
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};

export const InputWithIcon: Story = {
  args: {
    startNode: Mail,
    endNode: Check,
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
