import type { Meta, StoryObj } from "@storybook/react";

import { NativeSelect } from "./nativeSelect";

const meta = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",
    disabled: false,
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: (props) => (
    <NativeSelect {...props} value="">
      <option value="" disabled>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};

export const DisabledInput: Story = {
  render: (props) => (
    <NativeSelect {...props} disabled value="">
      <option value="" disabled>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};

export const ErrorInput: Story = {
  render: (props) => (
    <NativeSelect {...props} error="Input is required" value="">
      <option value="" disabled>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};
