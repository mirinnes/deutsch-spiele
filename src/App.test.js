import { render, screen } from "@testing-library/react";
import App from "./App";

describe("The app must display home page properly", () => {
  test("renders start btn", () => {
    render(<App />);
    const startButton = screen.getByText(/Spiel/i);
    expect(startButton).toBeInTheDocument();
  });
  test("Welcome is displayed", () => {
    const welcomeTitle = screen.getByText(/Herzlich Wilkommen/i);
    expect(welcomeTitle).toBeInTheDocument();
  });
});
