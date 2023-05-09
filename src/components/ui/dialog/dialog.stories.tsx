import type { Meta } from "@storybook/react";

import { Button } from "../button";
import { Dialog } from "./dialog";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

export const Default = {
  render: () => (
    <Dialog
      triggerNode={<Button variant="outline">Dialog</Button>}
      title="This is a Dialog"
      footer={<Button type="submit">Save changes</Button>}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sunt optio
      sint, facilis cupiditate perferendis excepturi dolorem deserunt, voluptas
      illum necessitatibus laudantium. Sit explicabo earum mollitia deleniti
      quam ullam doloribus laborum sequi dolorem, quaerat nihil error! Nam eos
      consectetur aliquam neque aspernatur deserunt maxime, facilis aut eum
      numquam iste labore. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Et
    </Dialog>
  ),
};
