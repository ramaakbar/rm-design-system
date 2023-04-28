import { render } from "@testing-library/react";

import { TextArea } from "./textArea";

describe("TextArea", () => {
  it("should render the input", () => {
    const { getByRole } = render(<TextArea name="input" />);

    expect(getByRole("textbox")).toHaveAttribute("name", "input");
  });

  it("should render the input with label", () => {
    const { getByLabelText } = render(<TextArea name="input" label="Label" />);

    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render description when description prop is provided", () => {
    const { getByText } = render(
      <TextArea
        label="Address"
        name="address"
        description="Please enter your address"
      />
    );

    expect(getByText("Please enter your address")).toBeInTheDocument();
  });

  it("should render error state", () => {
    const { getByRole } = render(
      <TextArea name="input" error="Invalid Input" />
    );

    expect(getByRole("textbox")).toHaveClass("text-destructive");
  });

  it("should disable the input when fieldset is disabled", () => {
    const { getByLabelText } = render(
      <fieldset disabled>
        <TextArea name="input" label="Email" />
      </fieldset>
    );

    expect(getByLabelText("Email")).toBeDisabled();
  });
});
