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
    <NativeSelect {...props}>
      <option value="" disabled selected>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};

export const DisabledInput: Story = {
  render: (props) => (
    <NativeSelect {...props} disabled>
      <option value="" disabled selected>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};

export const ErrorInput: Story = {
  render: (props) => (
    <NativeSelect {...props} error="Input is required">
      <option value="" disabled selected>
        Choose item
      </option>
      <option value="asdas">asdas</option>
    </NativeSelect>
  ),
};
