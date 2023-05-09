import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";

import { Form } from "../form";
import { DropzoneInput } from "./dropzoneInput";

describe("DropzoneInput", () => {
  const defaultProps = {
    name: "fileInput",
    label: "Upload File",
    accept: {
      "image/*": [],
    },
  };

  const FormTest = () => {
    const form = useForm();
    return (
      <Form form={form} onSubmit={() => {}}>
        <DropzoneInput {...defaultProps} />
      </Form>
    );
  };

  it("should render properly", () => {
    const { container } = render(<FormTest />);
    expect(container).toMatchSnapshot();
  });

  it("should display the label correctly", () => {
    render(<FormTest />);
    const label = screen.getByText("Upload File");
    expect(label).toBeInTheDocument();
  });

  it("should display the file path after selecting a file", async () => {
    render(<FormTest />);

    const input = screen.getByLabelText("Upload File");
    const file = new File(["test file content"], "test.png", {
      type: "image/png",
    });
    userEvent.upload(input, file);

    const filePath = await screen.findByText("test.png");
    expect(filePath).toBeInTheDocument();
  });

  it("should allow user to remove a selected file", async () => {
    render(<FormTest />);

    const input = screen.getByLabelText("Upload File");
    const file = new File(["test file content"], "test.png", {
      type: "image/png",
    });
    await userEvent.upload(input, file);

    const removeButton = screen.getByRole("button");
    await userEvent.click(removeButton);

    const dropzoneText = await screen.findByText("Click here to upload a file");

    expect(dropzoneText).toBeInTheDocument();
  });
});
