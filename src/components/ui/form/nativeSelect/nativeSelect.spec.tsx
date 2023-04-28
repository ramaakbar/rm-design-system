import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NativeSelect } from "./nativeSelect";

describe("NativeSelect", () => {
  it("should render with a single option", async () => {
    render(
      <NativeSelect name="fruit" label="Select your favorite fruit">
        <option value="apple">Apple</option>
      </NativeSelect>
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  it("should pass props to the select element", () => {
    const props = {
      name: "test",
      className: "custom-class",
      required: true,
      disabled: true,
      "data-testid": "test-select",
    };
    render(<NativeSelect {...props} />);
    const select = screen.getByTestId("test-select");
    expect(select).toHaveAttribute("name", "test");
    expect(select).toHaveClass("custom-class");
    expect(select).toBeRequired();
    expect(select).toBeDisabled();
  });

  it("should render a label when label prop is provided", () => {
    const label = "Test label";
    render(<NativeSelect name="test" label={label} />);
    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("should select option", async () => {
    render(
      <NativeSelect name="fruit" label="Select your favorite fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </NativeSelect>
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    await userEvent.selectOptions(select, "banana");
    expect(select).toHaveValue("banana");
  });
});
