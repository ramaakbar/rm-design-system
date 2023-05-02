// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";

// import { DateInput } from "./dateInput";

// still wip
describe("DateInput", () => {
  // it("should renders label, input and calendar popover", async () => {
  //   const label = "label";
  //   const name = "date";
  //   render(<DateInput label={label} name={name} />);
  //   const input = screen.getByLabelText(label);
  //   expect(input).toBeInTheDocument();
  //   const test = screen.getByRole("textbox");
  //   act(() => {
  //     userEvent.click(screen.getByRole("textbox"));
  //   });
  //   // await userEvent.click(test);
  //   const calendar = screen.getByRole("dialog");
  //   // expect(calendar).toBeInTheDocument();
  // });
  // it("should handle input change and displays error message", () => {
  //   const label = "Date";
  //   const name = "date";
  //   const errorMessage = "Please select a valid date.";
  //   render(<DateInput label={label} name={name} error={errorMessage} />);
  //   const input = screen.getByLabelText(label);
  //   expect(input).toBeInTheDocument();
  //   userEvent.type(input, "31 Feb 2022");
  //   expect(screen.getByText(errorMessage)).toBeInTheDocument();
  // });
  // it("should sets the input value when click the date", () => {
  //   const label = "Date";
  //   const name = "date";
  //   render(<DateInput label={label} name={name} />);
  //   const input = screen.getByLabelText(label);
  //   expect(input).toBeInTheDocument();
  //   userEvent.click(input);
  //   // Click the first day in the calendar to set the input value
  //   const calendar = screen.getByText("Test Calendar");
  //   userEvent.click(calendar);
  //   expect(input.value).toMatch(/^(\d{1,2}) (\w{3}) (\d{4})$/);
  // });
});
