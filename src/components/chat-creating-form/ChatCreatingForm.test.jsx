import { render, screen, fireEvent } from "@testing-library/react";
import { ChatCreatingForm } from "./ChatCreatingForm";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ChatCreating Component", () => {
  test("Renders ChatCreating Component", () => {
    render(
      <Router>
        <ChatCreatingForm />
      </Router>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("displays error for invalid input", () => {
    render(
      <Router>
        <ChatCreatingForm />
      </Router>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123" } });

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Number validation failed")).toBeInTheDocument();
  });
  test("navigates to the correct URL for valid input", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    render(
      <Router>
        <ChatCreatingForm navigation={navigateMock} />
      </Router>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "1234567890" } });

    fireEvent.click(screen.getByRole("button"));

    expect(navigateMock).toHaveBeenCalledWith("./chat/1234567890");
  });
});
