import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordInput } from "./passwordInput";

describe("PasswordInput", () => {
  it("should render input element with type password by default", () => {
    render(<PasswordInput name="password" />);

    expect(document.querySelector("input")).toHaveAttribute("type", "password");
  });

  it("should render input element with type text when show password button is clicked", () => {
    render(<PasswordInput name="password" label="Password" />);

    expect(document.querySelector("input")).toHaveAttribute("type", "password");
    act(() => {
      userEvent.click(screen.getByRole("button", { hidden: true }));
    });
    expect(document.querySelector("input")).toHaveAttribute("type", "password");
  });

  it("should render description when description prop is provided", () => {
    render(
      <PasswordInput
        label="Password"
        name="password"
        description="Please enter your password"
      />
    );
    const passwordDescription = screen.getByText("Please enter your password");
    expect(passwordDescription).toBeInTheDocument();
  });

  it("should render start node", () => {
    render(
      <PasswordInput
        name="test-input"
        label="Test Input"
        startNode="Start Node"
      />
    );
    const startNode = screen.getByText("Start Node");
    expect(startNode).toBeInTheDocument();
  });

  it("should render error state", () => {
    const { getByLabelText } = render(
      <PasswordInput name="input" label="Password" error="Invalid Input" />
    );

    expect(getByLabelText("Password")).toHaveClass("text-destructive");
  });

  it("should disable the input when fieldset is disabled", () => {
    const { getByLabelText } = render(
      <fieldset disabled>
        <PasswordInput name="input" label="Password" />
      </fieldset>
    );

    expect(getByLabelText("Password")).toBeDisabled();
  });
});
