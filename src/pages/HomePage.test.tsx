import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Given a Footer Component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a Navigation, Body and Footer component", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("heading", {
        name: /Welcome to Mindfulness, your meditation space/i,
      });

      const body = screen.getByRole("img", { name: /meditation woman/i });

      expect(text).toBeInTheDocument();
      expect(body).toBeInTheDocument();
    });
  });
});
