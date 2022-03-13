import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a list of images", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const facebook = screen.getByRole("img", { name: /facebook-logo/i });
      const instagram = screen.getByRole("img", { name: /instagram-logo/i });
      const twitter = screen.getByRole("img", { name: /twitter-logo/i });

      expect(facebook).toBeInTheDocument();
      expect(instagram).toBeInTheDocument();
      expect(twitter).toBeInTheDocument();
    });
  });
});
