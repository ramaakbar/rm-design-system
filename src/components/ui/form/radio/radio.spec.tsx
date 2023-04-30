import { render } from "@testing-library/react";

import { Radio } from "./radio";

describe("Radio", () => {
  it("should render the input", () => {
    const { getByRole } = render(<Radio name="input" />);

    expect(getByRole("radio")).toHaveAttribute("name", "input");
  });

  it("should render the input with label", () => {
    const { getByLabelText } = render(<Radio name="input" label="Label" />);

    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render description when description prop is provided", () => {
    const { getByText } = render(
      <Radio label="Address" name="React" description="Javascript framework" />
    );

    expect(getByText("Javascript framework")).toBeInTheDocument();
  });

  it("should disable the input when fieldset is disabled", () => {
    const { getByLabelText } = render(
      <fieldset disabled>
        <Radio name="input" label="React" />
      </fieldset>
    );

    expect(getByLabelText("React")).toBeDisabled();
  });
});
