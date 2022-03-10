import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a h1 with a text", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const text = screen.getByRole("heading", { name: /text here/i });

      expect(text).toBeInTheDocument();
    });
  });
});
