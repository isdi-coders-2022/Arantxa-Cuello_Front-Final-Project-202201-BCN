import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a Footer Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a Navigation, Body and Footer component", () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      const text = screen.getByRole("heading", { name: /text here/i });
      const heading = screen.getByRole("navigation", {
        name: "",
      });
      const body = screen.getByRole("img", { name: /meditation woman/i });

      expect(text).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(body).toBeInTheDocument();
    });
  });
});
