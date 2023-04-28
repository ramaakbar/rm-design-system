import { render, screen } from "@testing-library/react";

import { TextInput } from "./textInput";

describe("TextInput", () => {
  it("should render the input", () => {
    const { getByRole } = render(<TextInput name="input" />);

    expect(getByRole("textbox")).toHaveAttribute("name", "input");
  });

  it("should render the input with label", () => {
    const { getByLabelText } = render(<TextInput name="input" label="Label" />);

    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render description when description prop is provided", () => {
    const { getByText } = render(
      <TextInput
        label="Name"
        name="name"
        description="Please enter your name"
      />
    );

    expect(getByText("Please enter your name")).toBeInTheDocument();
  });

  it("should render start and end nodes", () => {
    render(
      <TextInput
        name="test-input"
        label="Test Input"
        startNode="Start Node"
        endNode="End Node"
      />
    );
    const startNode = screen.getByText("Start Node");
    expect(startNode).toBeInTheDocument();
    const endNode = screen.getByText("End Node");
    expect(endNode).toBeInTheDocument();
  });

  it("should render error state", () => {
    const { getByRole } = render(
      <TextInput name="input" error="Invalid Input" />
    );

    expect(getByRole("textbox")).toHaveClass("text-destructive");
  });

  it("should disable the input when fieldset is disabled", () => {
    const { getByLabelText } = render(
      <fieldset disabled>
        <TextInput name="input" label="Email" />
      </fieldset>
    );

    expect(getByLabelText("Email")).toBeDisabled();
  });
});
