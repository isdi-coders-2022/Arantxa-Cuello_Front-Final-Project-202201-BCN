import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display divs with a heading, logo, button and a link", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const logo = screen.getByRole("img", { name: /logo/i });
      const button = screen.getByRole("button", { name: /create an account/i });
      const link = screen.getByRole("link", { name: /login/i });
      const heading = screen.getByRole("heading", {
        name: /Your meditation space/i,
      });

      expect(logo).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
