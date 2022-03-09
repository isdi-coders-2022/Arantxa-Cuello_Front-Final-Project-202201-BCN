import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render navigation", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const nav = screen.getByRole("heading");

      expect(nav).toBeInTheDocument();
    });
  });
});
