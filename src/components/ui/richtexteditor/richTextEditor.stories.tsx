import type { Meta } from "@storybook/react";

import { RichTextEditor } from "./richTextEditor";

const meta = {
  title: "UI/RichTextEditor",
  component: RichTextEditor,
  tags: ["autodocs"],
} satisfies Meta<typeof RichTextEditor>;

export default meta;

export const Default = {
  render: () => (
    <>
      <RichTextEditor onChange={() => {}} />
    </>
  ),
};
