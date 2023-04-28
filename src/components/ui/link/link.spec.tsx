import { render, screen } from "@testing-library/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Link } from "./link";

describe("Link", () => {
  it("should render the link with children", () => {
    render(<Link href="/">Home</Link>);
    const linkElement = screen.getByText(/Home/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("should render an external link", () => {
    render(
      <Link href="https://www.google.com" external>
        Google
      </Link>
    );
    const linkElement = screen.getByText(/Google/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://www.google.com");
  });

  it("should render with left and right icons", () => {
    const leftIcon = () => <ArrowLeft data-testid="left-icon" />;
    const rightIcon = () => <ArrowRight data-testid="right-icon" />;
    render(
      <Link href="/" leftIcon={leftIcon} rightIcon={rightIcon}>
        Link
      </Link>
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("should pass down props to the link", () => {
    const onClick = jest.fn();
    render(
      <Link href="/" onClick={onClick}>
        Link
      </Link>
    );
    const linkElement = screen.getByText(/Link/);
    linkElement.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render with a custom class name", () => {
    render(
      <Link href="/" className="custom-class">
        Link
      </Link>
    );
    const linkElement = screen.getByText(/Link/);
    expect(linkElement).toHaveClass("custom-class");
  });

  it("should render with the default size and variant", () => {
    render(<Link href="/">Link</Link>);
    const linkElement = screen.getByText(/Link/);
    expect(linkElement).toHaveClass("text-base");
    expect(linkElement).toHaveClass("underline-offset-4");
  });

  it("should render with the specified size", () => {
    render(
      <Link href="/" size="sm">
        Link
      </Link>
    );
    const linkElement = screen.getByText(/Link/);
    expect(linkElement).toHaveClass("text-sm");
  });

  it("should render with the specified variant", () => {
    render(
      <Link href="/" variant="subtle">
        Link
      </Link>
    );
    const linkElement = screen.getByText(/Link/);
    expect(linkElement).toHaveClass("text-muted-foreground");
    expect(linkElement).toHaveClass("hover:text-accent-foreground");
    expect(linkElement).not.toHaveClass("underline-offset-4");
  });
});
