import { render } from "@testing-library/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "./button";

describe("Button ", () => {
  it("should render the button", () => {
    const { getByRole } = render(<Button>Button</Button>);

    expect(getByRole("button")).toHaveTextContent("Button");
    expect(getByRole("button")).not.toBeDisabled();
  });

  it("should render the button with destructive variant", () => {
    const { getByRole } = render(<Button variant="destructive">Button</Button>);

    expect(getByRole("button")).toHaveClass(
      "bg-destructive",
      "text-destructive-foreground"
    );
  });

  it("should render the button with left icon", () => {
    const { getByTestId } = render(
      <Button leftIcon={ArrowLeft} data-testid="button">
        Button
      </Button>
    );

    expect(getByTestId("button").querySelector("svg")).toBeInTheDocument();
  });

  it("should render the button with right icon", () => {
    const { getByTestId } = render(
      <Button rightIcon={ArrowRight} data-testid="button">
        Button
      </Button>
    );

    expect(getByTestId("button").querySelector("svg")).toBeInTheDocument();
  });

  it("should disable the button when isLoading is true", () => {
    const { getByRole } = render(<Button isLoading>Button</Button>);

    expect(getByRole("button")).toBeDisabled();
    expect(getByRole("button")).toHaveTextContent("Loading...");
    expect(
      getByRole("button").querySelector(".animate-spin")
    ).toBeInTheDocument();
  });

  it("should disable the button when fieldset is disabled", () => {
    const { getByRole } = render(
      <fieldset disabled>
        <Button>Button</Button>
      </fieldset>
    );

    expect(getByRole("button")).toBeDisabled();
  });
});
