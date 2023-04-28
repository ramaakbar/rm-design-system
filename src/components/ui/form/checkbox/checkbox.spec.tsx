import { render } from "@testing-library/react";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("should render the input", () => {
    const { getByRole } = render(<Checkbox name="input" />);

    expect(getByRole("checkbox")).toHaveAttribute("name", "input");
  });

  it("should render the input with label", () => {
    const { getByLabelText } = render(<Checkbox name="input" label="Label" />);

    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render description when description prop is provided", () => {
    const { getByText } = render(
      <Checkbox
        label="Address"
        name="React"
        description="Javascript framework"
      />
    );

    expect(getByText("Javascript framework")).toBeInTheDocument();
  });

  it("should disable the input when fieldset is disabled", () => {
    const { getByLabelText } = render(
      <fieldset disabled>
        <Checkbox name="input" label="React" />
      </fieldset>
    );

    expect(getByLabelText("React")).toBeDisabled();
  });
});
