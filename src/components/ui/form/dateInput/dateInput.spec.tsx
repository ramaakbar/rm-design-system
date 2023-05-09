import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DateInput } from "./dateInput";

describe("DateInput", () => {
  it("should renders label, input", async () => {
    render(<DateInput label="label" name="date" />);

    const label = screen.getByLabelText("label");
    expect(label).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should handle input change and displays error message", () => {
    const label = "Date";
    const name = "date";
    const errorMessage = "Please select a valid date.";
    render(<DateInput label={label} name={name} error={errorMessage} />);
    const input = screen.getByLabelText(label);
    expect(input).toBeInTheDocument();
    userEvent.type(input, "31 Feb 2022");
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
