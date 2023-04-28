import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

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

export const CheckedDisabledInput: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
