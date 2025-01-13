import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom"; // Add this import for toBeInTheDocument to work

test("renders the project title", () => {
  render(<App />);
  const projectTitle = screen.getByText(/CCS3316 Cloud Infrastructure Design/i);
  expect(projectTitle).toBeInTheDocument();
});
