import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";

import { useZodForm } from "../../../../hooks/useZodForm";
import { Form } from "../form";
import { DropzoneInput } from "./dropzoneInput";

const meta = {
  title: "UI/DropzoneInput",
  component: DropzoneInput,
  tags: ["autodocs"],
  args: {
    name: "name",
    label: "Label",
    disabled: false,
  },
} satisfies Meta<typeof DropzoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const schema = z.object({
  picture: z.array(z.custom<File>((v) => v instanceof File)).optional(),
});

const DropzoneExample = () => {
  const form = useZodForm({
    schema,
  });

  return (
    <Form form={form} onSubmit={() => {}}>
      <DropzoneInput name="asdasd" />
    </Form>
  );
};

export const Input: Story = {
  render: () => <DropzoneExample />,
};
