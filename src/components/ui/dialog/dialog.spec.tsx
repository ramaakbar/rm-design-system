import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../button";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("should renders the trigger", async () => {
    render(
      <Dialog
        triggerNode={<Button variant="outline">Dialog</Button>}
        title="Dialog Title"
        footer={<Button type="submit">Save changes</Button>}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sunt optio
        sint, facilis cupiditate perferendis excepturi dolorem deserunt,
        voluptas illum necessitatibus laudantium. Sit explicabo earum mollitia
        deleniti quam ullam doloribus laborum sequi dolorem, quaerat nihil
        error! Nam eos consectetur aliquam neque aspernatur deserunt maxime,
        facilis aut eum numquam iste labore. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Et
      </Dialog>
    );

    const btn = screen.getByText("Dialog");
    expect(btn).toBeInTheDocument();
  });

  it("should popups a dialog when button is clicked", async () => {
    render(
      <Dialog
        triggerNode={<Button variant="outline">Dialog</Button>}
        title="Dialog Title"
        footer={<Button type="submit">Save changes</Button>}
      >
        Dialog Content
      </Dialog>
    );

    const btn = screen.getByText("Dialog");
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });
});
