import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./radio";

const meta = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",
    disabled: false,
  },
} satisfies Meta<typeof Radio>;

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
