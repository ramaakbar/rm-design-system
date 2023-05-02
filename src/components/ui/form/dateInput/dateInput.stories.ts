import type { Meta, StoryObj } from "@storybook/react";

import { DateInput } from "./dateInput";

const meta = {
  title: "UI/DateInput",
  component: DateInput,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",

    disabled: false,
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};
