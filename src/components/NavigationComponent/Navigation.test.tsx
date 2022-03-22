import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

describe("Given a Navigation Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display divs with a heading, logo, button and a link", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getByRole("img", { name: /logo/i });
      //const button = screen.getAllByRole("link", {
      // name: /create an account/i,
      // });
      const link = screen.getByRole("link", { name: /login/i });
      const list = screen.getByRole("list", { name: "" });

      expect(logo).toBeInTheDocument();
      //expect(button).toBeEnabled();
      expect(link).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });
  });
});
