import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display login component", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByRole("main", { name: "" });

      expect(text).toBeInTheDocument();
    });
  });
  test("Then it should display a header and a button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </BrowserRouter>
    );
    const text = screen.getByRole("heading", {
      name: /Log in/i,
    });
    const button = screen.getByRole("button", {
      name: /Log in/i,
    });

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
